import React from 'react';
import { useRouter } from 'next/router';
import { NavBar } from '../../components/organisms/nav-bar-organism/src';
import { auth } from '../../services/firebase/firebase.utils';

export const NavBarController = (): JSX.Element => {
	const router = useRouter();

	const signOut = () => {
		auth.signOut();
	};

	const goToUserProfile = () => {
		router.push('/user-profile');
	};

	return (
		<NavBar
			isSignedIn={!!auth.currentUser}
			onSignOut={() => signOut()}
			onUserProfile={() => goToUserProfile()}
		/>
	);
};
