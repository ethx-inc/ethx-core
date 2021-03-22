import React from 'react';

import '../../../../../styles/globals.css';

export interface ShoppingBagProps {
	count: number;
	color?: 'white' | 'black' | 'gray-400';
}

export const ShoppingBag = ({
	count,
	color,
}: ShoppingBagProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-semibold py-2 px-6 ${
				color ? `text-${color}` : 'text-black'
			}  rounded-xl`}>
			{count}
		</button>
	);
};
