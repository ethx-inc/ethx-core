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
		<div className='text-center lg:text-left bg-hero-home bg-center bg-cover bg-no-repeat max-w-screen'>
			<MainContentContainer>
				<div className='py-40 px-10 lg:px-0 lg:pl-20'>
					<h2 className='font-bold text-5xl text-primary'>{title}</h2>
					<h4
						className={`font-regular mx-5 lg:mx-0 text-sm lg:text-lg text-${fontColor}`}>
						{' '}
						{subtitle}
					</h4>
				</div>
			</MainContentContainer>
		</div>
	);
};
