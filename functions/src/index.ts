// TODO: refactor imports to lazy load imports that are not needed in at lease 2 or more cloud functions

import { auth, config, firestore, https } from 'firebase-functions';
import { Stripe } from 'stripe';

// const functions = require('firebase-functions');
// const stripe = require('stripe');
const Admin = require('firebase-admin');

const admin = Admin.initializeApp();

const stripeConfig: Stripe.StripeConfig = {
	apiVersion: '2020-08-27',
};

const stripeInst = new Stripe(config().stripe.secret_key, stripeConfig);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.createStripeCustomer = auth.user().onCreate(async user => {
	const customer = await stripeInst.customers.create({ email: user.email });
	return admin
		.firestore()
		.collection('stripe_customers')
		.doc(user.uid)
		.set({ customer_id: customer.id });
});

const getCustomerId = async (userId: string) => {
	const snapShot = await admin
		.firestore()
		.collection('stripe_customers')
		.doc(userId)
		.get();
	return snapShot.data().customer_id;
};

exports.addPaymentSource = firestore
	.document('/stripe_customers/{userId}/tokens/{autoId}')
	.onWrite(async (change, context) => {
		const data = change.after.data();
		let token;
		if (data === null) {
			return null;
		}
		data ? ({ token } = data) : null;
		const customer = getCustomerId(context.params.userId);
		const response = await Stripe.CustomersResource.createSource(customer, {
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

const convertValue = (num: number) => {
	const remainder = (num % 1).toFixed(2) * 100;
	const wholeValue = Math.floor(num);
	if (remainder === 0) {
		return num * 100;
	}
	const numString = wholeValue.toString();
	const remainderString = remainder.toString();
	return Number(numString + remainderString);
};

const createTransferMap = (data: Record<string, unknown>) => {
	const connectedAccountIdToTotal = {};
	const keys = Object.keys(data);

	keys.forEach(key => {
		const item = data[key];
		const price = item.prices[item.selectedSize];
		const { connectedAccountId } = item.brandInfo;
		const { quantity } = item;
		if (connectedAccountId in connectedAccountIdToTotal) {
			connectedAccountIdToTotal[connectedAccountId] += price * quantity;
		} else {
			connectedAccountIdToTotal[connectedAccountId] = price * quantity;
		}
	});
	return connectedAccountIdToTotal;
};

const createTransferGroup = async (
	transferMap: Record<string, number>,
	transferGroupId: unknown,
) => {
	const keys = Object.keys(transferMap);
	keys.forEach(connectedAccountId => {
		const totalAmount = convertValue(transferMap[connectedAccountId]);

		const adjustedAmount = totalAmount - Math.floor(totalAmount * 0.08);
		stripeInst.transfers.create({
			amount: adjustedAmount,
			currency: 'usd',
			destination: connectedAccountId,
			// source_transaction: chargeId,
			transfer_group: transferGroupId,
		});
	});
};

// create a checkout
exports.createStripeCheckout = https.onCall(async (data, context) => {
	const items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
	const keys = Object.keys(data);

	keys.forEach(key => {
		const item = data[key];
		const price = item.prices[item.selectedSize];
		const convertedPrice = convertValue(price);
		const newItem: Stripe.Checkout.SessionCreateParams.LineItem = {
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
	});
	const transferMap = createTransferMap(data);
	// dynamically importing to reduce global imports
	const { v4: uuid_v4 } = await import('uuid');
	const transferGroupId = uuid_v4();
	// actually where session is created
	const session = await stripeInst.checkout.sessions.create({
		payment_method_types: ['card'],
		mode: 'payment',
		success_url: 'https://ethx.vercel.app/success/purchase-success',
		cancel_url: 'https://ethx.vercel.app/cart',
		shipping_address_collection: {
			allowed_countries: ['US'],
		},
		line_items: items,
		payment_intent_data: {
			transfer_group: transferGroupId,
		},
	});
	createTransferGroup(transferMap, transferGroupId);
	return {
		id: session.id,
	};
});
// end of create session

exports.venderStripeOnBoarding = https.onCall(async (data, context) => {
	const generateAccountLink = async (accountID: string) => {
		const link = await stripeInst.accountLinks.create({
			type: 'account_onboarding',
			account: accountID,
			refresh_url: 'https://ethx.vercel.app/user-profile',
			return_url: 'https://ethx.vercel.app/success/onboarding-success',
		});

		return link ? link.url : null;
	};

	const account = await stripeInst.accounts.create({ type: 'express' });
	const accountLinkURL = account ? await generateAccountLink(account.id) : null;
	return accountLinkURL ? { url: accountLinkURL, accountId: account.id } : null;
});

// Sending user to onboard Shippo
// exports.shippoOnboarding = functions.https.onCall(async (data, context) => {

// 	const response = await fetch(URL, {
// 		method: 'Get',
// 		headers: {
// 			Authorization: `ShippoToken ${accessToken}`,
// 			client_id: `${clientId}`,
// 			scope: '*',
// 			state: `${randomString}`,
// 		},
// 	});

// 	return response;
// });
