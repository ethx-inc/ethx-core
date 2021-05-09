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
		bulletPoints,
		description,
		sizes,
		prices,
		selectedSize,
	} = selectedItem;
	return (
		<div
			className={`text-${fontColor} relative lg:w-2/5 mx-5 mt-5 lg:mt-0`}>
			<p className='font-light'>{brandInfo.name}</p>
			<h3 className='text-lg font-bold mb-2'>{name}</h3>
			<ul className='list-disc text-sm mb-4 ml-10'>
				{bulletPoints.map(item => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
			<p className='text-sm'>{description}</p>
			<div>
				<span>Sizes: </span>

				{sizes.map((size, i) => {
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
				})}
			</div>
			<p className='font-bold my-5'>{prices[selectedSize]}</p>
		</div>
	);
};
