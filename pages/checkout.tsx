import React, { FC } from 'react';

import { CartCheckout } from '../packages/components/atoms/cart-checkout-atom/src';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src';
import { CheckoutTray } from '../packages/components/molecules/checkout-tray-molecule/src';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';

export interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = ({}: CheckoutProps) => {
	return (
		<div>
			<NavBarController />
			<MainContentContainer css='flex flex-col lg:flex-row lg:justify-center h-5/6'>
				<CheckoutTray />
				<CartCheckout />
			</MainContentContainer>
		</div>
	);
};

export default Checkout;
