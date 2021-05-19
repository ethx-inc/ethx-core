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
	onIncrease?;
	onDecrease?;
	onRemove?;
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
	onIncrease,
	onDecrease,
	onRemove,
}: CartItemProps): JSX.Element => {
	return (
		<div className='flex justify-between my-2 pb-4 lg:pb-1 border-b-2'>
			<img src={images[0]} alt={name} className='rounded-lg w-28' />

			<div className='flex flex-col -ml-36 lg:-ml-0 justify-between lg:flex-row '>
				<div className='flex flex-col text-xs mt-4  lg:-ml-8 items-start'>
					<h3 className='text-sm capitalize font-bold leading-3'>
						{brandInfo ? brandInfo.name : null}
					</h3>
					<h3 className='capitalize text-sm mb-1'>{name}</h3>
					{selectedColor ? (
						<div className='capitalize flex flex-row'>
							<h3>Color:</h3>
							<h3 className='ml-1'>{selectedColor}</h3>
						</div>
					) : null}
					{sizes.length > 0 ? (
						<div className='capitalize flex flex-row'>
							<h3>Size:</h3>
							<h3 className='ml-1'>{sizes[selectedSize]}</h3>
						</div>
					) : null}
					<div className='product-quantity flex flex-row'>
						<h3>Quantity:</h3>
						<h3 className='ml-1'>{quantity}</h3>
					</div>
				</div>
				
				<div className='quantity-pill flex flex-col lg:mx-20 lg:mt-4 lg:mb-0'>
					<QuantityPill
						quantity={quantity}
						onIncrease={() => onIncrease()}
						onDecrease={() => onDecrease()}
					/>
				</div>
			</div>

			<div className='product-price text-right lg:text-left flex flex-col-reverse lg:flex-col justify-between items-end lg:my-4 mt-4'>
				<h3>{`$${prices[selectedSize]}`}</h3>
				<button
					type='button'
					className='text-sm underline text-gray-500 cursor-pointer'
					onClick={() => onRemove()}>
					Remove
				</button>
			</div>
			
		</div>
	);
};