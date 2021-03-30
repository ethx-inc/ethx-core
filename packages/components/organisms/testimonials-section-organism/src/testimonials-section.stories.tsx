import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	TestimonialsSection,
	TestimonialsSectionProps,
} from './testimonials-section.organism';

import { Primary } from '../../../molecules/testimonial-molecule/Testimonial.stories';

export default {
	title: 'Organism/TestimonialsSection',
	component: TestimonialsSection,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<TestimonialsSectionProps> = args => (
	<TestimonialsSection {...args} />
);

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
	testimonials: [
		{ ...Primary.args, id: 0 },
		{ ...Primary.args, id: 1 },
		{ ...Primary.args, id: 2 },
		{ ...Primary.args, id: 3 },
	],
};
