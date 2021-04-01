import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	TestimonialCardAtom,
	TestimonialCardAtomProps,
} from './TestimonialCard.atom';

export default {
	title: 'Atom/TestimonialCard',
	component: TestimonialCardAtom,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<TestimonialCardAtomProps> = args => (
	<TestimonialCardAtom {...args} />
);

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
	name: 'Blake',
	quote: 'I like eggs',
};
