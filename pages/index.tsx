import React, {useEffect, useContext} from 'react';
import HomePage from "./home";

import {auth, createUserProfileDoc} from '../packages/services/firebase-auth/firebase.utils';

import { UserContext } from '../packages/services/context/user-context';

export interface HomeProps {
	color?: string;
	fontColor?: string;
	title?: string;
	subtitle?: string;
}
export const Home = (
	color,
	fontColor,
	title,
	subtitle

): JSX.Element => {
	const { setUserData } = useContext(UserContext);

	useEffect(() => {
		let unsubscribe = auth.onAuthStateChanged(async (user) => {

			if (user) {
				const userRef = await createUserProfileDoc(user);
		
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

		return unsubscribe();
	})
  
	return (
		<div>
			<HomePage />
		</div>
	);
};

export default Home;
