import React from 'react';

export interface MixedSectionTextProps {
	title?: string;
	subtitle?: string;
}

export const MixedSectionText = ({
	title,
	subtitle,
}: MixedSectionTextProps): JSX.Element => {
	return (
		<div className='w-4/5 m-auto text-center text-primary text-3xl lg:text-4xl lg:ml-0 lg:text-left'>
			<h2 className='font-bold'>
				{title}
			</h2>
			<span className='font-regular'>{subtitle}</span>
		</div>
	);
};
