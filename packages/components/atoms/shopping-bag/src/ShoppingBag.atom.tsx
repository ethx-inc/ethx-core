import React from 'react';

import '../../../../../styles/globals.css';

import { HiOutlineShoppingBag } from 'react-icons/hi';

export interface ShoppingBagProps {
	count: number;
	color?: 'black' | 'gray-400';
}

export const ShoppingBag = ({
	count,
	color,
}: ShoppingBagProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-semibold ${
				color ? `text-${color}` : 'text-white'
			}  relative flex justify-center items-center`}>
			<HiOutlineShoppingBag size={40} />
			<span className='absolute top-3'>{count}</span>
		</button>
	);
};
