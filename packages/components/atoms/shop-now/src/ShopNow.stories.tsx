import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ShopNow, ShopNowProps } from './ShopNow.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/ShopNow' /* Title of the component  */,
	component: ShopNow /* component */,
	argTypes: {
		color: { control: 'color' },
		fontColor: { control: 'text-white' },
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<ShopNowProps> = args => <ShopNow {...args} />;

export const SolidShopNow = Template.bind({});

SolidShopNow.args = {
	title: 'shop now',
};

export const OutlineShopNow = Template.bind({});

OutlineShopNow.args = {
	title: 'shop now',
	color: 'transparent',
	fontColor: 'text-black',
};
