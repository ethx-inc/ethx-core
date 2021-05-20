const functions = require('firebase-functions');
const stripe = require('stripe');
const Admin = require('firebase-admin');

const admin = Admin.initializeApp();
// const { addSyntheticLeadingComment } = require("typescript");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createStripeCustomer = functions.auth.user().onCreate(async user => {
	const stripeInst = stripe(functions.config().stripe.secret_key);
	const customer = await stripeInst.customers.create({ email: user.email });
	return admin
		.firestore()
		.collection('stripe_customers')
		.doc(user.uid)
		.set({ customer_id: customer.id });
});

exports.addPaymentSource = functions.firestore
	.document('/stripe_customers/{userId}/tokens/{autoId}')
	.onWrite(async (change, context) => {
		const data = change.after.data();
		if (data === null) { return null}
		const token = data.token;
		const customer = getCustomerId(context.params.userId);
		const response = await stripe.customers.createSource(customer, {source: token});
		return admin.firestore()
			.collection('stripe_customers')
			.doc(context.params.userId)
			.collection('sources')
			.doc(response.fingerprint)
			.set(response, {merge: true});
	})

const getCustomerId = async (userId) => {
	const snapShot = await admin.firestore()
		.collection('stripe_customers')
		.doc(userId)
		.get();
	return snapShot.data().customer_id;
}
	

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
	// stripe init
	const stripeInst = stripe(functions.config().stripe.secret_key);
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