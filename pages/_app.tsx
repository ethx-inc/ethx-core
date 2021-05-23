import '../styles/globals.css';
import React, {useState, useEffect} from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import {LoginProvider} from '../packages/services/context/login-context';
import { UserContext } from '../packages/services/context/user-context';
import {FilterProvider} from '../packages/services/context/filter-context';
import {CartProvider} from '../packages/services/context/cart-context';

import {auth, createUserProfileDoc} from '../packages/services/firebase/firebase.utils';

import "regenerator-runtime/runtime";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	const [userData, setUserData] = useState({
		fname: '',
		lname: '',
		email: '',
		uid: '',
		isVendor: false
	});


	useEffect(() => {
		
		let unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDoc(userAuth);
		
				userRef.onSnapshot(snapShot => {
		
					setUserData({
						uid: snapShot.id,
						...snapShot.data()
					});
				});
			}
			else {
				setUserData(null);
			}

		});

		

		return unsubscribe;
	}, [])


	return (
		<UserContext.Provider value={{ userData, setUserData }}>
			<CartProvider>
				<FilterProvider>
					<LoginProvider>
						<Component {...pageProps} />
					</LoginProvider>
				</FilterProvider>
			</CartProvider>
		</UserContext.Provider>
	);
};


export default MyApp;
