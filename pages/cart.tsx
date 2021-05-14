import React, { FC } from 'react';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src';
import { CartCheckout } from '../packages/components/atoms/cart-checkout-atom/src';
import { CartSummary } from '../packages/components/atoms/cart-summary-atom/src';


export interface CartProps {

}

const Cart: FC<CartProps> = ({

}: CartProps) => {
    return (
        <div>
            <NavBarController/>
            <MainContentContainer css="flex flex-col lg:flex-row lg:justify-center h-5/6">
                <CartSummary />
                <CartCheckout />
            </MainContentContainer>
        </div>

    );
}

export default Cart;