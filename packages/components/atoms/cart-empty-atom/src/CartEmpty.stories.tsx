import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CartEmpty, CartEmptyProps } from './CartEmpty.atom';

export default {
	title: 'Atom/CartEmpty',
	component: CartEmpty,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<CartEmptyProps> = args => <CartEmpty {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
