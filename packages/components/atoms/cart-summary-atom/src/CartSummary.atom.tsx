import React from 'react';
import { QuantityPill } from '../../quantity-pill-atom/src';

export interface CartSummaryProps {
	brandName?: string;
	productColor?: string;
	productName?: string;
	productPrice?: string;
	productQuantity?: string;
	productSize?: string;
	productImg?: string;
	onClick?;
}

export const CartSummary = ({
	brandName,
	productColor,
	productName,
	productPrice,
	productQuantity,
	productImg,
	productSize,
	onClick,
}: CartSummaryProps): JSX.Element => {
	return (
		<div className='flex flex-col lg:flex-row w-full md:w-1/2 mt-2 md:mt-10'>
			<div className='cart-order-basket w-full px-3'>
				<div className='text-2xl font-light mb-1'>
					<h3>Your Basket </h3>
				</div>
				<div className='text-sm border-b-2 pb-3 font-light italic'>
					<h3>Thanks for shopping ethically! </h3>
				</div>
				<div className='cart-order-item'>
					<div className='flex flex-row justify-between my-5 border-b-2 pb-5'>
						<div className='product-image flex flex-col'>
							<img
								src={productImg}
								alt='flipped-hero'
								width={100}
								height={100}
								className='rounded-lg'
							/>
						</div>
						<div className='product-info flex flex-col justify-evenly -ml-14 lg:-ml-32 text-xs'>
							<h3 className='brand-name text-sm font-bold leading-3'>{brandName}</h3>
							<h3 className='product-name text-sm'>{productName}</h3>
							<div className='product-color flex flex-row ml-2'>
								<h3>Color:</h3>
								<h3 className='mx-3'>{productColor}</h3>
							</div>
							<div className='product-size flex flex-row ml-2'>
								<h3>Size:</h3>
								<h3 className='mx-3'>{productSize}</h3>
							</div>
							<div className='product-quantity flex flex-row ml-2'>
								<h3>Quantity:</h3>
								<h3 className='mx-3'>{productQuantity}</h3>
							</div>
						</div>
						<div className='flex flex-col-reverse lg:flex-row'>
							<div className='quantity-pill flex flex-col ml-4'>
								<QuantityPill quantity={productQuantity} />
							</div>
							<div className='product-price text-center flex flex-col ml-16 my-auto lg:my-0'>
								<h3>{productPrice}</h3>
								<h3 className='text-xs underline text-center text-gray-500 cursor-pointer mb-4'>REMOVE</h3>
							</div>
						</div>
					</div>
					<div />
				</div>
			</div>
		</div>
	);
};
