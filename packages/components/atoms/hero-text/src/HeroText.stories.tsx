import { Meta, Story } from '@storybook/react';
import React from 'react';

import { HeroText, HeroTextProps } from './HeroText.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/HeroText' /* Title of the component  */,
	component: HeroText /* component */,
	argTypes: {
		fontColor: { control: 'text-red-300' },
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<HeroTextProps> = args => <HeroText {...args} />;

export const BrandColorHero = Template.bind({});

BrandColorHero.args = {
	title: 'ethx',
	subtitle: 'simplified ecommerce for the conscious consumer',
	fontColor: 'primary',
};

export const BrandColorAlt = Template.bind({});

BrandColorAlt.args = {
	title: 'ethx',
	subtitle: 'simplified ecommerce for the conscious consumer',
	fontColor: 'gray-500',
};
