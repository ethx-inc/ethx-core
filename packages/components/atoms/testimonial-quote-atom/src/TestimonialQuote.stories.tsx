import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	TestimonialQuote,
	TestimonialQuoteProps,
} from './TestimonialQuote.atom';

export default {
	title: 'Atom/TestimonialQuote',
	component: TestimonialQuote,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<TestimonialQuoteProps> = args => (
	<TestimonialQuote {...args} />
);

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
	name: 'Blake',
	quote: 'I like eggs and toast for breakfast',
	color: 'gray-500',
	nameColor: 'gray-400',
};
