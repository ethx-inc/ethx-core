import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'regenerator-runtime/runtime';

require('firebase');
require('firebase/functions');

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// required to avoid "app named default already exists" https://github.com/vercel/next.js/issues/1999
const firebaseApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

export const auth = firebase.auth();
export const firestoreDb = firebase.firestore();

export const createUserProfileDoc = async (
	userAuth: firebase.User,
	additionalData?,
): Promise<any> => {
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

	const userRef = firestoreDb.doc(`Users/${userAuth.uid}`);
	// get whatever data is located at reference
	const snapShot = await userRef.get();
	// checks if the user doesn't exist
	if (!snapShot.exists) {
		const { email } = userAuth;
		const createdAt = new Date();

		// if the user doesn't already exist, then create one with the data above
		try {
			await userRef.set({
				email,
				createdAt,
				...data,
			});
		} catch (e) {
			console.log('error creating user', e.message);
		}
	}
	// allways return user ref in case we want to use it later
	return userRef;
};

export const updateEmail = (email, callback) => {
	const user = auth.currentUser;
	user
		.updateEmail(email)
		.then(() => {
			// update successful
			callback();
		})
		.catch(error => {
			// an error occured
			alert('An error occurred, please try again.');
			console.log(error);
		});
};

export const changePassword = (newPassword, callback) => {
	const user = auth.currentUser;
	// check getProviderData() see if .getProviderId() is google.com
	user
		.updatePassword(newPassword)
		.then(() => {
			// Update successful.
			callback();
		})
		.catch(error => {
			// An error happened.
			alert('An error occurred, please try again.');
			console.log(error);
		});
};

export const createStripeCheckout = data =>
	firebase.functions().httpsCallable('createStripeCheckout')(data);

export const onboardVendor = () =>
	firebase.functions().httpsCallable('onboardVendor')();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = (callback?) => {
	auth.signInWithPopup(provider).then(() => callback());
};

export default firebase;
