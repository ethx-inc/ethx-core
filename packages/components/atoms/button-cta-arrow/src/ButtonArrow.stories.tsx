import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ButtonArrow, ButtonArrowProps } from './ButtonArrow.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/ShopNow' /* Title of the component  */,
	component: ButtonArrow /* component */,
	argTypes: {
		color: { control: 'gray-50' },
		fontColor: { control: 'gray-500' },
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<ButtonArrowProps> = args => <ButtonArrow {...args} />;

export const SolidShopNow = Template.bind({});

SolidShopNow.args = {
	title: 'go',
	fontColor: 'white'
};

export const OutlineShopNow = Template.bind({});

OutlineShopNow.args = {
	title: 'go',
	color: 'gray-50',
	fontColor: 'gray-500',
};
