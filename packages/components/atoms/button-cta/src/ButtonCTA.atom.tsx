import React from 'react';

export interface ButtonCTAProps {
	title?: string;
	color?: string;
	fontColor?: string;
	onClick?;
}

export const ButtonCTA = ({
	title,
	color,
	fontColor,
	onClick,
}: ButtonCTAProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-regular w-5/6 lg:w-1/5 py-1 px-4 border-2 border-primary ${
				color ? `bg-${color}` : 'bg-primary'
			}  ${fontColor ? `text-${fontColor}` : 'text-white'} rounded-full`}
			style={{ fontFamily: 'Roboto' }}
			onClick={() => onClick()}>
			{title}
		</button>
	);
};
