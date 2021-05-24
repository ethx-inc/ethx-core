// TODO: refactor this to TS
const Admin = require('firebase-admin');
const functions = require('firebase-functions');
const shippo = require('shippo');
const stripe = require('stripe');

const admin = Admin.initializeApp();
const stripeInst = stripe(functions.config().stripe.secret_key);
// const shippoInstance = shippo('<YOUR_PRIVATE_KEY');

// const { addSyntheticLeadingComment } = require("typescript");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createStripeCustomer = functions.auth.user().onCreate(async user => {
	const customer = await stripeInst.customers.create({ email: user.email });
	return admin
		.firestore()
		.collection('stripe_customers')
		.doc(user.uid)
		.set({ customer_id: customer.id });
});

const getCustomerId = async userId => {
	const snapShot = await admin
		.firestore()
		.collection('stripe_customers')
		.doc(userId)
		.get();
	return snapShot.data().customer_id;
};

exports.addPaymentSource = functions.firestore
	.document('/stripe_customers/{userId}/tokens/{autoId}')
	.onWrite(async (change, context) => {
		const data = change.after.data();
		if (data === null) {
			return null;
		}
		const { token } = data;
		const customer = getCustomerId(context.params.userId);
		const response = await stripe.customers.createSource(customer, {
			source: token,
		});
		return admin
			.firestore()
			.collection('stripe_customers')
			.doc(context.params.userId)
			.collection('sources')
			.doc(response.fingerprint)
			.set(response, { merge: true });
	});

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
	const items = [];
	const keys = Object.keys(data);

	const convertValue = num => {
		const remainder = (num % 1).toFixed(2) * 100;
		const wholeValue = Math.floor(num);
		if (remainder === 0) {
			return num * 100;
		}
		const numString = wholeValue.toString();
		const remainderString = remainder.toString();
		return Number(numString + remainderString);
	};
	keys.forEach(key => {
		const item = data[key];
		const price = item.prices[item.selectedSize];
		const newItem = {
			quantity: item.quantity,
			price_data: {
				currency: 'usd',
				unit_amount: convertValue(price),
				product_data: {
					name: item.name,
					metadata: { brand: item.brand },
					description: item.brand,
				},
			},
		};
		items.push(newItem);
	});

	const session = await stripeInst.checkout.sessions.create({
		payment_method_types: ['card'],
		mode: 'payment',
		success_url: 'http://localhost:3000',
		cancel_url: 'http://localhost:3000/cart',
		shipping_address_collection: {
			allowed_countries: ['US'],
		},
		line_items: items,
	});
	return {
		id: session.id,
	};
});

const generateAccountLink = accountID => {
	return stripeInst.accountLinks
		.create({
			type: 'account_onboarding',
			account: accountID,
			refresh_url: 'http://localhost:3000/refresh',
			return_url: 'http://localhost:3000',
		})
		.then(link => link.url);
};

exports.onboardVendor = functions.https.onCall(async (data, context) => {
	try {
		const account = await stripeInst.accounts.create({ type: 'express' });

		const accountLinkURL = await generateAccountLink(account.id);
		return { url: accountLinkURL };
	} catch (err) {
		return null;
	}
});

// TODO: email vender and customer of successful purchase

// TODO: add successful purchase to customer and vender history

// TODO: add redirect for both successful purchase and failed purchase

exports.shipOrderWithShippo = functions.https.onCall(async (data, context) => {
	const addressFrom = {
		name: 'Ms Hippo',
		company: 'Shippo',
		street1: '215 Clayton St.',
		city: 'San Francisco',
		state: 'CA',
		zip: '94117',
		country: 'US', // iso2 country code
		phone: '+1 555 341 9393',
		email: 'support@goshippo.com',
	};

	// get user address from checkout
	// example address_to object dict
	const addressTo = {
		name: 'Ms Hippo',
		company: 'Shippo',
		street1: '803 Clayton St.',
		city: 'San Francisco',
		state: 'CA',
		zip: '94117',
		country: 'US', // iso2 country code
		phone: '+1 555 341 9393',
		email: 'support@goshippo.com',
	};

	// parcel object dict
	/* for each parcel in order */
	const parcelOne = {
		length: '5',
		width: '5',
		height: '5',
		distance_unit: 'in',
		weight: '2',
		mass_unit: 'lb',
	};

	const parcelTwo = {
		length: '5',
		width: '5',
		height: '5',
		distance_unit: 'in',
		weight: '2',
		mass_unit: 'lb',
	};

	const shipment = {
		address_from: addressFrom,
		address_to: addressTo,
		parcels: [parcelOne, parcelTwo],
	};

	shippo.transaction
		.create({
			shipment,
			servicelevel_token: 'ups_ground',
			carrier_account: '558c84bbc25a4f609f9ba02da9791fe4',
			label_file_type: 'png',
		})
		.then(
			transaction => {
				shippo.transaction
					.list({
						rate: transaction.rate,
					})
					.then(mpsTransactions => {
						mpsTransactions.results.forEach(mpsTransaction => {
							if (mpsTransaction.status === 'SUCCESS') {
								console.log('Label URL: %s', mpsTransaction.label_url);
								console.log(
									'Tracking Number: %s',
									mpsTransaction.tracking_number,
								);
							} else {
								// hanlde error transactions
								console.log('Message: %s', mpsTransactions.messages);
							}
						});
					});
			},
			err => {
				// Deal with an error
				console.log('There was an error creating transaction : %s', err.detail);
			},
		);
});
