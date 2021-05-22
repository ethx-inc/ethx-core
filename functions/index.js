const functions = require('firebase-functions');
const stripe = require('stripe');
const Admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

const admin = Admin.initializeApp();
const stripeInst = stripe(functions.config().stripe.secret_key);
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

const createTransferMap = data => {
	const brandToTotal = {};
	const keys = Object.keys(data);

	keys.forEach(key => {
		const item = data[key];
		const price = item.prices[item.selectedSize];
		const brand = item.brandInfo.name; //should instead be connected stripe account id
		const quantity = item.quantity;
		if (brand in brandToTotal) {
			brandToTotal[brand] += price * quantity
		}
		else {
			brandToTotal[brand] = price * quantity
		}
	});
	return brandToTotal;
}

const createTransferGroup = async transferMap => {
	const keys = Object.keys(transferMap);
	const transferGroup = uuidv4();
	keys.forEach(connectedAccountUID => {
		const transfer = await stripeInst.transfers.create({
			amount: transferMap[connectedAccountUID],
			currency: 'usd',
			destination: connectedAccountUID,
			transfer_group: transferGroup
		})
	});
	return transferGroup;
}

//create a checkout
exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
	const items = [];
	let total = 0;
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
		const convertedPrice = convertValue(price)
		const newItem = {
			quantity: item.quantity,
			price_data: {
				currency: 'usd',
				unit_amount: convertedPrice,
				product_data: {
					name: item.name,
					metadata: { brand: item.brand },
					description: item.brand,
				},
			},
		};
		items.push(newItem);
		total += item.quantity * convertedPrice;
	});
	const transferMap = createTransferMap(data);
	const transferGroup = createTransferGroup(transferMap);
	//actuall where session is created
	const session = await stripeInst.checkout.sessions.create({
		payment_method_types: ['card'],
		mode: 'payment',
		success_url: 'http://localhost:3000',
		cancel_url: 'http://localhost:3000/cart',
		shipping_address_collection: {
			allowed_countries: ['US'],
		},
		line_items: items,
		payment_intent_data: {
			application_fee_amount: (total * .08).toFixed(2),
			transfer_group: transferGroup,
		}
	});
	return {
		id: session.id,
	};
});
//end of create session
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
		return { url: accountLinkURL, accountId: account.id };
	} catch (err) {
		return null;
	}
});
