import React, { FC } from 'react';
import { QuantityPill } from '../../quantity-pill-atom/src';

export interface CartItemProps {
	/* Props here */
	name?: string;
	brandInfo?;
	sizes?: string[];
	prices?: number[];
	quantity?: number;
	selectedSize?: number;
	colors?: string[];
	selectedColor?: string;
	images?: string[];
	onClick?;
}

export const CartItem = ({
	name,
	brandInfo,
	sizes = [],
	prices = [],
	quantity,
	selectedSize,
	colors,
	selectedColor,
	images = [],
	onClick,
}: CartItemProps): JSX.Element => {
	console.log('this is name:', name);
	return (
		<div className='cart-order-item'>
			<div className='flex flex-row justify-between my-5 border-b-2 pb-5'>
				<div className='product-image flex flex-col'>
					<img
						src={images[0]}
						alt={name}
						className='rounded-lg w-20'
					/>
				</div>

				<div className='product-info flex flex-col justify-evenly -ml-14 lg:-ml-32 text-xs'>
					<h3 className='brand-name text-sm capitalize font-bold leading-3'>
						{brandInfo ? brandInfo.name : null}
					</h3>
					<h3 className='product-name capitalize text-sm'>{name}</h3>
					<div className='product-color capitalize flex flex-row ml-2 mt-1'>
						<h3>Color:</h3>
						<h3 className='mx-3'>{selectedColor}</h3>
					</div>
					<div className='product-size capitalize flex flex-row ml-2'>
						<h3>Size:</h3>
						<h3 className='mx-3'>{sizes[selectedSize]}</h3>
					</div>
					<div className='product-quantity flex flex-row ml-2'>
						<h3>Quantity:</h3>
						<h3 className='mx-3'>{quantity}</h3>
					</div>
				</div>

				<div className='flex flex-col-reverse lg:flex-row'>
					<div className='quantity-pill flex flex-col ml-4'>
						<QuantityPill quantity={quantity} />
					</div>
					<div className='product-price text-center flex flex-col ml-16 my-auto lg:my-0'>
						<h3>{prices[selectedSize]}</h3>
						<h3 className='text-xs underline text-center text-gray-500 cursor-pointer mb-4'>
							REMOVE
						</h3>
					</div>
				</div>
			</div>
			<div />
		</div>
	);
};
