import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Testimonial, TestimonialProps } from './Testimonial.molecule';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Molecule/Testimonial' /* Title of the component  */,
	component: Testimonial /* component */,
	argTypes: {},
} as Meta;

const Template: Story<TestimonialProps> = args => <Testimonial {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	name: 'Blake',
	quote: 'I like eggs',
	img:
		'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
};
