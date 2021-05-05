import React from 'react';

export interface ButtonCTAProps {
	borderColor?: string;
	buttonLogo?: string;
	title?: string;
	color?: string;
	fontColor?: string;
	onClick?;
}

export const ButtonCTA = ({
	borderColor,
	buttonLogo,
	title,
	color,
	fontColor,
	onClick,
}: ButtonCTAProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`flex flex-row justify-center font-regular w-5/6 py-1 px-4 border-2
			${borderColor ? `border-${borderColor}` : 'border-primary'}
			${color ? `bg-${color}` : 'bg-primary'}  
			${fontColor ? `text-${fontColor}` : 'text-white'} 
			rounded-full`}
			style={{ fontFamily: 'Roboto' }}
			onClick={() => onClick()}>
			{title}
		</button>
	);
};
