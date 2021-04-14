import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	TestimonialsSection,
	TestimonialsSectionProps,
} from './testimonials-section.organism';

import { TestimonialQuote } from '../../../atoms/testimonial-quote-atom/src';

export default {
	title: 'Organism/TestimonialsSection',
	component: TestimonialsSection,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<TestimonialsSectionProps> = args => (
	<TestimonialsSection {...args}>
		<TestimonialQuote
			name='Blake'
			quote='I like eggs and toast for breakfast'
		/>
		<TestimonialQuote
			name='Blake'
			quote='I like eggs and toast for breakfast'
		/>
		<TestimonialQuote
			name='Blake'
			quote='I like eggs and toast for breakfast'
		/>
	</TestimonialsSection>
);

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};

export const Stack = Template.bind({});

Stack.args = {
	stackView: true,
};
