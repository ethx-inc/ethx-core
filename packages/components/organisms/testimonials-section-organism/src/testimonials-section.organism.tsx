import React from 'react';
import { Testimonial } from '../../../molecules/testimonial-molecule';
import { TestimonialProps } from '../../../molecules/testimonial-molecule/Testimonial.molecule';

export interface TestimonialsSectionProps {
	/* Props here */
	testimonials: TestimonialProps[];
}

export const TestimonialsSection = ({
	testimonials,
}: TestimonialsSectionProps): JSX.Element => {
	return (
		<div className='flex flex-col items-center'>
			<h1>Testimonials</h1>
			<div className='flex md:justify-around justify-between w-full sm:overflow-auto overflow-x-scroll'>
				{testimonials.map(testimony => {
					return <Testimonial key={testimony.id} {...testimony} />;
				})}
			</div>
		</div>
	);
};
