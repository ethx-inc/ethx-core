import React from 'react';
import {
	TestimonialQuote,
	TestimonialQuoteProps,
} from '../../components/atoms/testimonial-quote-atom/src';
import { TestimonialsSection } from '../../components/organisms/testimonials-section-organism/src';

export interface TestimonialsSectionProps {
	/* Props here */
	testimonials: TestimonialQuoteProps[];
}

export const TestimonialController = ({
	testimonials,
}: TestimonialsSectionProps): JSX.Element => {
	return (
		<TestimonialsSection>
			{testimonials.map(testimony => {
				return <TestimonialQuote key={testimony.id} {...testimony} />;
			})}
		</TestimonialsSection>
	);
};
