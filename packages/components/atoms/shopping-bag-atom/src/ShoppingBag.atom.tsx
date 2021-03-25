import React from 'react';

import { HiOutlineShoppingBag } from '@react-icons/all-files/hi/HiOutlineShoppingBag';

export interface ShoppingBagProps {
	count?: 0;
	color?: 'black' | 'gray-400' | 'white';
	onClick?;
}

export const ShoppingBag = ({
	count,
	color,
	onClick,
}: ShoppingBagProps): JSX.Element => {
	return (
		<button
			onClick={() => onClick()}
			type='button'
			className={`font-semibold ${
				color ? `text-${color}` : ''
			}  relative flex justify-center items-center focus:outline-none`}>
			<HiOutlineShoppingBag size={40} />
			<span className='absolute top-3'>{count}</span>
		</button>
	);
};
