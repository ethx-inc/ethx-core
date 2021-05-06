import React, { FC } from 'react';
import { CheckoutShipping } from '../../../atoms/checkout-shipping-atom/src'
import { CheckoutPayment } from '../../../atoms/checkout-payment-atom/src'


export interface CheckoutTrayProps {
	/* Props here */
}

export const CheckoutTray: FC<CheckoutTrayProps> = ({

}: CheckoutTrayProps) => {
	return (
		<div className='flex flex-col mt-5 lg:mt-10 lg:mr-10 w-full md:w-1/2'>
			<div className='mx-3 lg:mx-0'>
				<div className='text-2xl font-light border-b-2 pb-3'><h3>Checkout </h3></div>		
				<CheckoutShipping sectionName={'1. Shipping'} />
				<CheckoutShipping sectionName={'2. Billing'} />
				<CheckoutPayment sectionName={'3. Payment Details'} />

			</div>
		</div>
	);
};
