import React from 'react';

import '../../../../../styles/globals.css';

export interface ShoppingBagProps {
	count: number;
	color?: string;
}

export const ShoppingBag = ({
	count,
	color,
}: ShoppingBagProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-semibold py-2 px-6 ${
				color ? `bg-[${color}]` : 'bg-yellow-200'
			}  rounded-xl`}
			style={{ fontFamily: 'Roboto' }}>
			{count}
		</button>
	);
};
