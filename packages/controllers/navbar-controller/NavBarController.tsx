import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { NavBar } from '../../components/organisms/nav-bar-organism/src';
import { auth } from '../../services/firebase/firebase.utils';

import { CartContext } from '../../services/context/cart-context';

export const NavBarController = (): JSX.Element => {
	const router = useRouter();
	const { cartData, setCartData } = useContext(CartContext);
	const { items } = cartData;

	const signOut = () => {
		auth.signOut();
	};

	const goToUserProfile = () => {
		router.push('/user-profile');
	};

	const getCount = () => {
		const keys = Object.keys(items);
		let total = 0;
		keys.forEach(key => {
			total += items[key].quantity;
		});
		return total;
	};

	return (
		<NavBar
			isSignedIn={!!auth.currentUser}
			onSignOut={() => signOut()}
			onUserProfile={() => goToUserProfile()}
			count={getCount()}
		/>
	);
};
