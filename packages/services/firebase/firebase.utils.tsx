import { getFunctions, httpsCallable } from 'firebase/functions';
import { initializeApp } from 'firebase/app';
import { doc, getFirestore } from 'firebase/firestore';
import {
	getAuth,
	GoogleAuthProvider,
	sendPasswordResetEmail,
	signInWithPhoneNumber,
	signInWithPopup,
	updateCurrentUser,
	updateEmail,
	User,
} from 'firebase/auth';
import { getUser } from './firebase.db';

const firebaseApp = initializeApp({
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
});

export const functions = getFunctions(firebaseApp);

// import 'firebase/auth';
// import 'firebase/firestore';
// import 'regenerator-runtime/runtime';

// require('firebase/functions');

// const firebaseConfig = {
// 	apiKey: process.env.NEXT_PUBLIC_API_KEY,
// 	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
// 	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
// 	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
// 	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
// 	appId: process.env.NEXT_PUBLIC_APP_ID,
// 	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// };

// required to avoid "app named default already exists" https://github.com/vercel/next.js/issues/1999
// const firebaseApp = !firebase.apps.length
// 	? firebase.initializeApp(firebaseConfig)
// 	: firebase.app();

export const auth = getAuth();
// export const firestoreDb = db;

export const createUserProfileDoc = async (
	userAuth: User,
	additionalData?,
): Promise<unknown> => {
	if (!userAuth) return {};
	// create a reference to this users location
	const { displayName } = userAuth;
	let fname = '';
	let lname = '';
	if (displayName) {
		const names = displayName.split(' ');
		if (names.length === 2) {
			[fname, lname] = names;
		} else if (names.length === 1) {
			[fname] = names;
		}
	}
	const data = { fname, lname, ...additionalData };

	const user = getUser();
	// get whatever data is located at reference
	// const snapShot = await userRef.get();
	// // checks if the user doesn't exist
	// if (!snapShot.exists) {
	// 	const { email } = userAuth;
	// 	const createdAt = new Date();

	// 	// if the user doesn't already exist, then create one with the data above
	// 	try {
	// 		await userRef.set({
	// 			email,
	// 			createdAt,
	// 			...data,
	// 		});
	// 	} catch (e) {
	// 		console.log('error creating user', e.message);
	// 	}
	// }
	// // allways return user ref in case we want to use it later
	// return userRef;
	return null;
};

export const updateCurrentUserEmail = (email, callback): void => {
	const user = auth.currentUser;
	updateEmail(user, email)
		.then(() => {
			callback();
		})
		.catch(err => {
			/*
			 *	TODO: create a logger and send error to logger.
			 *	Also create a modal that could handle showing error
			 */
			alert('An error occurred, please try again.');
			console.log(err);
		});
};

export const changePassword = (newPassword, callback) => {
	const user = auth.currentUser;
	// check getProviderData() see if .getProviderId() is google.com

	sendPasswordResetEmail(auth, user.email);
};

export const createStripeCheckout = data =>
	httpsCallable(functions, 'createStripeCheckout')(data);

export const onboardVendor = () => httpsCallable(functions, 'onboardVendor')();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async (callback?) => {
	await signInWithPopup(auth, provider);
	callback?.();
};
