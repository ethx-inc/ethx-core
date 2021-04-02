import React from 'react';

import '../../../../../styles/globals.css';

export interface HeroTextProps {
	title: string;
	fontColor?: string;
	subtitle: string;
}

export const HeroText = ({
	title,
	fontColor,
	subtitle,
}: HeroTextProps): JSX.Element => {
	return (
		<div className='w-3/5 text-center lg:text-left'>
			<h2 className='font-bold text-5xl lg:text-6xl text-primary'>
				{title}
			</h2>
			<h4
				className={`font-regular text-sm lg: text-lg text-${fontColor}`}>
				{subtitle}
			</h4>
		</div>
	);
};
