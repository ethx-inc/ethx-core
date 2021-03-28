import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AddCart, AddCartProps } from './AddCart.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/AddCart' /* Title of the component  */,
	component: AddCart /* component */,
	argTypes: {
		color: { control: 'color' },
		fontColor: { control: 'text-white'}
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<AddCartProps> = args => <AddCart {...args} />;

export const SolidShopNow = Template.bind({});

SolidShopNow.args = {
	title: 'add to cart',
};

export const OutlineShopNow = Template.bind({});

OutlineShopNow.args = {
	title: 'add to cart',
	color: 'transparent',
	fontColor: 'text-black'
};
