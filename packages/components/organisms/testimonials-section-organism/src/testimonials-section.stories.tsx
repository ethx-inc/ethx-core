import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	TestimonialsSection,
	TestimonialsSectionProps,
} from './testimonials-section.organism';

import { Testimonial } from '../../../molecules/testimonial-molecule/src';

export default {
	title: 'Organism/TestimonialsSection',
	component: TestimonialsSection,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<TestimonialsSectionProps> = args => (
	<TestimonialsSection {...args}>
		<Testimonial
			name='Blake'
			quote='I like eggs'
			img='https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'
		/>
		<Testimonial
			name='Blake'
			quote='I like eggs'
			img='https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'
		/>
		<Testimonial
			name='Blake'
			quote='I like eggs'
			img='https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'
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
