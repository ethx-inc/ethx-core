import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ButtonCTA, ButtonCTAProps } from './ButtonCTA.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/ButtonCTA' /* Title of the component  */,
	component: ButtonCTA /* component */,
	argTypes: {
		color: { control: 'color' },
		borderColor: { control: 'primary' },
		fontColor: { control: 'text-white' },
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<ButtonCTAProps> = args => <ButtonCTA {...args} />;

export const SolidShopNow = Template.bind({});

SolidShopNow.args = {
	title: 'add to cart',
};

export const OutlineShopNow = Template.bind({});

OutlineShopNow.args = {
	title: 'add to cart',
	color: 'gray-50',
	fontColor: 'gray-500',
};
