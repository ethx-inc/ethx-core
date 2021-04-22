import React from 'react';

export interface ButtonArrowProps {
	title?: string;
	color?: string;
	fontColor?: string;
}

export const ButtonArrow = ({
	title,
	color,
	fontColor,
}: ButtonArrowProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-regular m-auto w-20 flex justify-between py-1 px-2 border-2 border-primary ${
				color ? `bg-${color}` : 'bg-primary'
			}  ${fontColor ? `text-${fontColor}` : 'text-white'} rounded-full`}
			style={{ fontFamily: 'Roboto' }}>
			{title}
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				className='w-5 pt-0.5'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='M9 5l7 7-7 7'
				/>
			</svg>
		</button>
	);
};
