import '../styles/globals.css';
import React, {useEffect, useState} from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import {auth, createUserProfileDoc} from '../firebase/firebase.utils';

import {LoginProvider} from '../context/login-context';

import "regenerator-runtime/runtime";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		let unsubscribe = auth.onAuthStateChanged(async (user) => {

			if (user) {
				const userRef = await createUserProfileDoc(user);
		
				userRef.onSnapshot(snapShot => {
		
				setCurrentUser({
					id: snapShot.id,
					...snapShot.data()
				});
				});
			}
			else {
				setCurrentUser(null);
			}

		});

		return unsubscribe();
	})

	return (
		<LoginProvider>
			<Component {...pageProps} />
		</LoginProvider>
	);
};

export default MyApp;
