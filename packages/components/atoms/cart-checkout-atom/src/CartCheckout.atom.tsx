import React from 'react';
import { ButtonCTA } from '../../button-cta/src';

export interface CartCheckoutProps {
	borderColor?: string;
	estTotal?: string;
	subtotal?: string;
	onClick?;
}

export const CartCheckout = ({
	borderColor,
	estTotal,
	subtotal,
	onClick,
}: CartCheckoutProps): JSX.Element => {
	return (
		<div className='flex flex-col lg:flex-row justify-between mt-10'>
			<div className='cart-order-total w-full lg:h-80 lg:w-80 lg:border-2 lg:border-gray-300 bg-gray-50 lg:rounded-lg px-3 py-3'>
				<div className='flex justify-between text-sm'>
					<h3>Subtotal: </h3>
					<h3>{subtotal}</h3>
				</div>
				<div className='flex justify-between text-sm'>
					<h3>Shipping: </h3>
					<h3 className='italic'>TBD</h3>
				</div>
				<div className='flex justify-between text-sm'>
					<h3>Tax: </h3>
					<h3 className='italic'>TBD</h3>
				</div>
				<div className='flex justify-between text-lg font-medium mt-5 border-t-2 py-2'>
					<h3>Estimated Total: </h3>
					<h3>{estTotal}</h3>
				</div>
				<h3 className='text-xs text-center text-gray-500'>
					Shipping and taxes calculated at checkout
				</h3>
				<div className='flex relative justify-center my-4'>
					<ButtonCTA title='Checkout' />
				</div>
				<div className='flex relative justify-center my-4'>
					<ButtonCTA
						borderColor='yellow-400'
						color='yellow-400'
						fontColor='black'
						title='Pay with Paypal'
					/>
				</div>
			</div>
		</div>
	);
};
