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
		<div className='grid grid-cols-2 lg:grid-cols-4 my-5 border-b-2 pb-5'>
			<img src={images[0]} alt={name} className='rounded-lg w-20' />

			<div className='flex flex-col text-xs  items-end lg:items-start'>
				<h3 className='text-sm capitalize font-bold leading-3'>
					{brandInfo ? brandInfo.name : null}
				</h3>
				<h3 className='capitalize text-sm mb-1'>{name}</h3>
				{selectedColor ? (
					<div className='capitalize flex flex-row'>
						<h3>Color:</h3>
						<h3 className='ml-3'>{selectedColor}</h3>
					</div>
				) : null}
				{sizes.length > 0 ? (
					<div className='capitalize flex flex-row'>
						<h3>Size:</h3>
						<h3 className='ml-3'>{sizes[selectedSize]}</h3>
					</div>
				) : null}
				<div className='product-quantity flex flex-row'>
					<h3>Quantity:</h3>
					<h3 className='ml-3'>{quantity}</h3>
				</div>
			</div>

			<div className='quantity-pill flex flex-col'>
				<QuantityPill
					quantity={quantity}
					onIncrease={() => onIncrease()}
					onDecrease={() => onDecrease()}
				/>
			</div>

			<div className='product-price text-right lg:text-left flex flex-col items-end lg:items-start'>
				<h3>{`${prices[selectedSize]} each`}</h3>
				<button
					type='button'
					className='text-sm underline text-gray-500 cursor-pointer'
					onClick={() => onRemove()}>
					REMOVE
				</button>
			</div>
		</div>
	);
};
