import React from 'react';

import '../../../../../styles/globals.css';

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
			className={`text-sm lg:text-lg border-2 text-${fontColor} border-primary flex justify-between relative z-0 rounded-full px-7 py-1 -mb-5 w-3/5 z-40 lg:w-2/5 
			${color ? `bg-${color}` : 'bg-gray-200'}
			${fontColor ? `text-${fontColor}` : 'text-yellow-50' } `}
			style={{ fontFamily: 'Roboto' }}>

			more ethx filters
			<div onClick={() => onClick()}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-4 lg:w-6 cursor-pointer transform hover:rotate-180'>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			</div>

		</div>
	);
};
