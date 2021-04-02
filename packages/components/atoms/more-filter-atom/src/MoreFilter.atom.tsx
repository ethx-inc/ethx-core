import React from 'react';

import '../../../../../styles/globals.css';

export interface MoreFilterProps {
	title: string;
	color?: string;
	fontColor?: string;
}

export const MoreFilter = ({
	title,
	color,
	fontColor

}: MoreFilterProps): JSX.Element => {
	return (
		<div
			className={`text-sm lg:text-lg border-2 text-${fontColor} border-red-400 bg-transparent rounded-full flex justify-between px-4 py-1 w-3/5 lg:w-2/5
			${color} : bg-${color} ? bg-transparent `}
			style={{ fontFamily: 'Roboto' }}>
		{title}
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-4 lg:w-6 cursor-pointer transform hover:rotate-180'>
  			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
		</div>
	);
};
