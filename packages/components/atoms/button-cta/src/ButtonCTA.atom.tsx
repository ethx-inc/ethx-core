import React from 'react';

export interface ButtonCTAProps {
	title: string;
	color?: string;
	fontColor?: string;
}

export const ButtonCTA = ({
	title,
	color,
	fontColor,
}: ButtonCTAProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-regular py-1 px-4 border-2 border-primary ${
				color ? `bg-${color}` : 'bg-primary'
			}  ${fontColor ? `text-${fontColor}` : 'text-white'} rounded-full`}
			style={{ fontFamily: 'Roboto' }}>
			{title}
		</button>
	);
};
