import React from 'react';
import { NavBar } from '../../components/organisms/nav-bar-organism/src';
import { auth } from '../../services/firebase-auth/firebase.utils';

export const NavBarController = (): JSX.Element => {
	const signOut = () => {
		auth.signOut();
	};

	return (
		<NavBar isSignedIn={!!auth.currentUser} onSignOut={() => signOut()} />
	);
};
