import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'regenerator-runtime/runtime';

// import { DocumentReference } from '@firebase/firestore-types';

const firebaseConfig = {
	apiKey: 'AIzaSyCQOmSzE3KR6s5xD7S6MLTgdesdF9QMQ_Y',
	authDomain: 'ethx-6ff0a.firebaseapp.com',
	projectId: 'ethx-6ff0a',
	storageBucket: 'ethx-6ff0a.appspot.com',
	messagingSenderId: '1075800864831',
	appId: '1:1075800864831:web:430252346c58233be3208a',
	measurementId: 'G-QY05EGDT9Q',
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
	const userRef = firestoreDb.doc(`users/${userAuth.uid}`);
	// get whatever data is located at reference
	console.log('userRef made');
	const snapShot = await userRef.get();
	console.log('snapshot received');
	// checks if the user doesn't exist
	if (!snapShot.exists) {
		const { email } = userAuth;
		const createdAt = new Date();

		// if the user doesn't already exist, then create one with the data above
		try {
			await userRef.set({
				email,
				createdAt,
				...additionalData,
			});
		} catch (e) {
			console.log('error creating user', e.message);
		}
	}
	// allways return user ref in case we want to use it later
	return userRef; // new Promise(resolve => resolve(userRef));
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = history => {
	auth.signInWithPopup(provider);
};

export default firebase;
