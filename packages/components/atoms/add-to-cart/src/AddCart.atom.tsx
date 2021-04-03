import React from 'react';

import '../../../../../styles/globals.css';

export interface AddCartProps {
	title: string;
	color?: string;
	fontColor?: string;
}

export const AddCart = ({
	title,
	color,
	fontColor,
}: AddCartProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-regular py-1 px-4 border-2 border-primary ${
				color ? `bg-${color}` : 'bg-primary'
			}  ${
				fontColor ? `text-${fontColor}` : 'text-white'
			} rounded-full`}
			style={{ fontFamily: 'Roboto' }}>
			{title}
		</button>
	);
};
