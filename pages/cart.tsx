import React, { FC, useContext } from 'react';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src';
import { CartCheckout } from '../packages/components/atoms/cart-checkout-atom/src';
import { CartSummary } from '../packages/components/atoms/cart-summary-atom/src';

import {CartContext} from '../packages/services/context/cart-context';

import {createStripeCheckout} from '../packages/services/firebase/firebase.utils';
import { Stripe, loadStripe } from '@stripe/stripe-js';


export interface CartProps {

}

const Cart: FC<CartProps> = ({

}: CartProps) => {
    const { cartData } = useContext(CartContext);
	const { items } = cartData;

    let stripePromise: Promise<Stripe>
    const getStripe = async () => {
        if (!stripePromise) {
            console.log(process.env.NEXT_PUBLIC_STRIPE_KEY);
            stripePromise =  loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
        }
        return stripePromise;
    }
    
    const makePurchase = async (data?, context?) => {
        createStripeCheckout(data).then(response => {
            const sessionId = response.data.id;
            getStripe().then(elem => elem.redirectToCheckout({sessionId: sessionId}));
        })
    }

    return (
        <div>
            <NavBarController/>
            <MainContentContainer css="flex flex-col lg:flex-row lg:justify-center h-5/6">
                <CartSummary />
                <CartCheckout onClick={() => makePurchase(items)}/>
            </MainContentContainer>
        </div>

    );
}

export default Cart;