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
                <CartSummary brandName={'the best brand'} productImg={'/images/flipped-hero-image.jpg'}productName={'moisturizer'} productPrice={'$20.99'} productQuantity={'1'}/>
                <CartCheckout estTotal={'$20.99'}subtotal={'$20.99'}/>
            </MainContentContainer>
        </div>

    );
}

export default Cart;