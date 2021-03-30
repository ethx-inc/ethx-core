import React from 'react';
import {
	Testimonial,
	TestimonialProps,
} from '../../../molecules/testimonial-molecule/src';

export interface TestimonialsSectionProps {
	/* Props here */
	testimonials: TestimonialProps[];
	stackView?: false;
}

export const TestimonialsSection = ({
	testimonials,
	stackView,
}: TestimonialsSectionProps): JSX.Element => {
	return (
		<div className='flex flex-col items-center'>
			<h1>Testimonials</h1>
			<div
				className={`flex ${
					stackView ? 'flex-col items-center' : ''
				} md:justify-around justify-between w-full sm:overflow-auto`}>
				{testimonials.map(testimony => {
					return <Testimonial key={testimony.id} {...testimony} />;
				})}
			</div>
		</div>
	);
};
