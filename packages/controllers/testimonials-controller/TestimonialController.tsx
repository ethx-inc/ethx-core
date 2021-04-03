import React from 'react';
import {
	Testimonial,
	TestimonialProps,
} from '../../components/molecules/testimonial-molecule/src';
import { TestimonialsSection } from '../../components/organisms/testimonials-section-organism/src';

export interface TestimonialsSectionProps {
	/* Props here */
	testimonials: TestimonialProps[];
}

export const TestimonialController = ({
	testimonials,
}: TestimonialsSectionProps): JSX.Element => {
	return (
		<TestimonialsSection>
			{testimonials.map(testimony => {
				return <Testimonial key={testimony.id} {...testimony} />;
			})}
		</TestimonialsSection>
	);
};
