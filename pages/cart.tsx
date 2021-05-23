import { loadStripe, Stripe } from '@stripe/stripe-js';
import React, { FC, useContext } from 'react';

import { CartCheckout } from '../packages/components/atoms/cart-checkout-atom/src';
import { CartSummary } from '../packages/components/atoms/cart-summary-atom/src';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { CartContext } from '../packages/services/context/cart-context';
import { createStripeCheckout } from '../packages/services/firebase/firebase.utils';

const Cart: FC = () => {
	const { cartData } = useContext(CartContext);
	const { items } = cartData;

	let stripePromise: Promise<Stripe>;
	const getStripe = async () => {
		if (!stripePromise) {
			stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
		}
		return stripePromise;
	};

	/* What is the context here? */
	const makePurchase = async (data?, context?) => {
		createStripeCheckout(data).then(response => {
			const sessionId = response.data.id;
			getStripe().then(elem => elem.redirectToCheckout(sessionId));
		});
	};

	return (
		<div>
			<NavBarController />
			<MainContentContainer css='flex flex-col lg:flex-row lg:justify-center h-5/6'>
				<CartSummary />
				<CartCheckout onClick={() => makePurchase(items)} />
			</MainContentContainer>
		</div>
	);
};

export default Cart;
