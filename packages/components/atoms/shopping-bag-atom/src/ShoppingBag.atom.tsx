import React from 'react';

import '../../../../../styles/globals.css';

import { HiOutlineShoppingBag } from 'react-icons/hi';

export interface ShoppingBagProps {
	count?: 0;
	color?: 'black' | 'gray-400' | 'white';
}

export const ShoppingBag = ({
	count,
	color,
}: ShoppingBagProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-semibold ${
				color ? `text-${color}` : ''
			}  relative flex justify-center items-center`}>
			<HiOutlineShoppingBag size={40} />
			<span className='absolute top-3'>{count}</span>
		</button>
	);
};