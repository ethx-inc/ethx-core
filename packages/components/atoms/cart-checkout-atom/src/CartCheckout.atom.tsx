import React, { useContext, useEffect, useState } from 'react';
import { ButtonCTA } from '../../button-cta/src';

import { CartContext } from '../../../../services/context/cart-context';

export interface CartCheckoutProps {
	borderColor?: string;
	shipping?: number;
	tax?: number;
	onClick?;
}

export const CartCheckout = ({
	borderColor,
	shipping = 0,
	tax = 0,
	onClick,
}: CartCheckoutProps): JSX.Element => {
	const { cartData } = useContext(CartContext);
	const { items } = cartData;
	const [subTotal, setSubTotal] = useState(0);
	const [estTotal, setEstTotal] = useState(0);

	useEffect(() => {
		const keys = Object.keys(items);
		let total = 0;
		keys.forEach(key => {
			const product = items[key];
			const { quantity } = product;
			const price = product.prices[product.selectedSize];
			total += quantity * price;
		});
		setSubTotal(parseFloat(total.toFixed(2)));
	}, [items]);

	useEffect(() => {
		setEstTotal(subTotal + shipping + tax);
	}, [subTotal, shipping, tax]);

	return (
		<div className='flex flex-col lg:flex-row justify-between mt-10'>
			<div className='cart-order-total w-full lg:h-60 lg:w-80 lg:border-2 lg:border-gray-300 bg-gray-50 lg:rounded-lg px-3 py-6'>
				<div className='flex justify-between text-sm'>
					<h3>Subtotal: </h3>
					<h3>${subTotal}</h3>
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
					<h3>${estTotal}</h3>
				</div>
				<h3 className='text-xs text-center text-gray-500'>
					Shipping and taxes calculated at checkout
				</h3>
				<div className='flex relative justify-center my-4'>
					<ButtonCTA title='Checkout' handleClick={() => onClick()} />
				</div>
			</div>
		</div>
	);
};
