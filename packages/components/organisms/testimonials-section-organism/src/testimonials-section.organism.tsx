import React, { FC } from 'react';

import { SectionText } from '../../../atoms/section-text/src';

export interface TestimonialsSectionProps {
	/* Props here */
	stackView?: false;
	children?: React.ReactNode;
}

export const TestimonialsSection: FC<TestimonialsSectionProps> = ({
	stackView,
	children,
}: TestimonialsSectionProps) => {
	return (
		<div className='flex flex-col items-center'>
			<SectionText title='testimonials' subtitle='' />
			<div
				className={`flex ${
					stackView ? 'flex-col items-center' : ''
				} md:justify-around justify-between w-full overflow-auto `}>
				{children}
			</div>
		</div>
	);
};
