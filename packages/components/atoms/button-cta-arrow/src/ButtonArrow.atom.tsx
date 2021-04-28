import React from 'react';

export interface ButtonArrowProps {
	title?: string;
	color?: string;
	fontColor?: string;
	onClick?;
}

export const ButtonArrow = ({
	title,
	color,
	fontColor,
	onClick,
}: ButtonArrowProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-regular m-auto w-28 flex justify-between py-1 px-3 border-2 border-primary ${
				color ? `bg-${color}` : 'bg-primary'
			}  ${fontColor ? `text-${fontColor}` : 'text-white'} rounded-full`}
			style={{ fontFamily: 'Roboto' }}
			onClick={() => onClick()}>
			{title}
		<svg 
			xmlns="http://www.w3.org/2000/svg" 
			className="h-6 w-6" 
			fill="none" 
			viewBox="0 0 24 24" 
			stroke="currentColor">
  				<path 
				  stroke-linecap="round" 
				  stroke-linejoin="round" 
				  stroke-width="2" 
				  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
		</svg>
		</button>
	);
};
