import React from 'react';

import '../../../../../styles/globals.css';

export interface SectionTextProps {
	title: string;
	fontColor?: string;
	subtitle: string;
}

export const SectionText = ({
	title,
	fontColor,
	subtitle,
}: SectionTextProps): JSX.Element => {
	return (
		<div className='w-3/5 text-center lg:text-left'>
			<h2 className='font-bold text-3xl lg:text-4xl text-primary'>
				{title}
			</h2>
			<h4
				className={`font-regular text-sm lg: text-lg 
				${fontColor ? `text-${fontColor}` : 'text-gray-500'}`}>
				{subtitle}
			</h4>
		</div>
	);
};
