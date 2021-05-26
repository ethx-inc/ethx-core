import React from 'react';

import { MainContentContainer } from '../../main-content-container-atom/src';

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
		<div className='text-left bg-hero-home bg-center bg-cover bg-no-repeat max-w-screen h-80 lg:h-96 -mt-1'>
			<MainContentContainer>
				<div className='pt-24 lg:pt-40'>
					<h2 className='font-light ml-6 lg:ml-0 text-5xl text-white'>
						{title}
					</h2>
					<h4
						className={`font-regular ml-6 lg:ml-0 w-2/5 mt-2 lg:mt-0 text-sm lg:text-lg text-${fontColor}`}>
						{' '}
						{subtitle}
					</h4>
				</div>
			</MainContentContainer>
		</div>
	);
};
