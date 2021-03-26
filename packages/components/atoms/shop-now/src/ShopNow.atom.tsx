import React from 'react';

import '../../../../../styles/globals.css';

export interface ShopNowProps {
	title: string;
	color?: string;
	fontColor?: string;
}

export const ShopNow = ({ title, color, fontColor }: ShopNowProps): JSX.Element => {

	return (
		<button
			type='button'
			className={`font-regular py-1 px-4 border-2 border-red-400 ${
				color ? `bg-[${color}]` : 'bg-red-400'
			}  ${
				fontColor ? `text-[${fontColor}]` : 'text-white'
			} rounded-full`}
			style={{ fontFamily: 'Roboto' }}>
			{title}
		</button>
	);
};
