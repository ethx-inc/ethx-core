import React, { useContext } from 'react';

import { CartContext } from '../../../../services/context/cart-context';

export interface PDPTextProps {
	fontColor?: string;
}

export const PDPText = ({ fontColor }: PDPTextProps): JSX.Element => {
	const { cartData, setCartData } = useContext(CartContext);
	const { selectedItem } = cartData;
	const {
		brandInfo,
		name,
		description,
		sizes = [],
		selectedSize = 0,
		colors = [],
		selectedColor = 0,
		prices = [],
	} = selectedItem;
	return (
		<div className={`text-${fontColor} relative lg:w-2/5 mx-5 mt-5 lg:mt-0`}>
			<p className='font-light'>{brandInfo ? brandInfo.name : null}</p>
			<h3 className='text-lg font-bold mb-2'>{name}</h3>
			<p className='text-sm'>{description}</p>
			<div className='mt-3 italic'>
				<span>{sizes.length > 0 ? 'Sizes: ' : null} </span>

				{sizes
					? sizes.map((size, i) => {
							return (
								<label htmlFor={size} className='mr-3' key={size}>
									<input
										key={size}
										type='radio'
										name='size'
										value={prices[i]}
										onChange={() =>
											setCartData({
												...cartData,
												selectedItem: {
													...selectedItem,
													selectedSize: i,
												},
											})
										}
										id={size}
										checked={selectedSize === i}
									/>
									{size}
								</label>
							);
					  })
					: null}
			</div>
			<div className='mt-3 italic'>
				<span>{colors.length > 0 ? 'Colors: ' : null} </span>

				{colors
					? colors.map((size, i) => {
							return (
								<label htmlFor={size} className='mr-3' key={size}>
									<input
										key={size}
										type='radio'
										name='color'
										value={prices[i]}
										onChange={() =>
											setCartData({
												...cartData,
												selectedItem: {
													...selectedItem,
													selectedColor: i,
												},
											})
										}
										id={size}
										checked={selectedColor === i}
									/>
									{size}
								</label>
							);
					  })
					: null}
			</div>
			<p className='font-bold my-5'>${prices ? prices[selectedSize] : null}</p>
		</div>
	);
};
