import React from 'react';

export interface MoreFilterProps {
	color?: string;
	fontColor?: string;
	onClick?;
}

export const MoreFilter = ({
	color,
	fontColor,
	onClick,

}: MoreFilterProps): JSX.Element => {
	return (

		<div
			className={`text-sm lg:text-lg border-2 text-${fontColor} border-primary flex justify-between relative z-0 rounded-full m-auto px-7 py-1 -mb-5 w-5/5 z-40 lg:w-3/5 
			${color ? `bg-${color}` : 'bg-gray-50'}
			${fontColor ? `text-${fontColor}` : 'text-gray-500' } `}
			style={{ fontFamily: 'Roboto' }}>

			more ethx filters
			<div onClick={() => onClick()}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-4 lg:w-6 relative top-0.5 cursor-pointer transform hover:rotate-180'>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
				</svg>
			</div>

		</div>
	);
};
