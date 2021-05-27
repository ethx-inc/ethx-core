import React from 'react';

export interface ButtonCTAProps {
	borderColor?: string;
	title?: string;
	color?: string;
	fontColor?: string;
	handleClick?;
}

export const ButtonCTA = ({
	borderColor,
	title,
	color,
	fontColor,
	handleClick,
}: ButtonCTAProps): JSX.Element => {
	return (
		<button
			onClick={event => handleClick()}
			type='button'
			className={`flex flex-row justify-center font-regular w-5/6 py-1 px-4 border-2
			${borderColor ? `border-${borderColor}` : 'border-primary'}
			${color ? `bg-${color}` : 'bg-primary'}  
			${fontColor ? `text-${fontColor}` : 'text-white'} 
			rounded-full`}
			style={{ fontFamily: 'Roboto' }}>
			{title}
		</button>
	);
};
