import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CartItem, CartItemProps } from './CartItem.atom';

export default {
	title: 'Atom/CartItem',
	component: CartItem,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<CartItemProps> = args => <CartItem {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
