import React, { FC } from 'react';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src';
import { CartCheckout } from '../packages/components/atoms/cart-checkout-atom/src';
import { CheckoutTray } from '../packages/components/molecules/checkout-tray-molecule/src'



export interface CheckoutProps {

}

const Checkout: FC<CheckoutProps> = ({

}: CheckoutProps) => {
    return (
        <div>
            <NavBarController/>
            <MainContentContainer css="flex flex-col lg:flex-row lg:justify-center h-5/6">
                <CheckoutTray />
                <CartCheckout estTotal={'$20.99'}subtotal={'$20.99'}/>
            </MainContentContainer>
        </div>

    );
}

export default Checkout;