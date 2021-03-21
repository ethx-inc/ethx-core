import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ShoppingBag, ShoppingBagProps } from './ShoppingBag.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/ShoppingBag' /* Title of the component  */,
	component: ShoppingBag /* component */,
	argTypes: {
		color: { control: 'color' },
	},
} as Meta;

const Template: Story<ShoppingBagProps> = args => <ShoppingBag {...args} />;

export const NavBar = Template.bind({});

NavBar.args = {
	count: 0,
};
