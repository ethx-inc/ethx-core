import { Meta, Story } from '@storybook/react';
import React from 'react';

import { MoreFilter, MoreFilterProps } from './MoreFilter.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/MoreFilter' /* Title of the component  */,
	component: MoreFilter /* component */,
	argTypes: {
		color: { control: 'color' },
		fontColor: { control: 'fontColor' }
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<MoreFilterProps> = args => <MoreFilter {...args} />;

export const SolidFill = Template.bind({});

SolidFill.args = {
	title: 'more ethx filters',
	color: 'red-400',
	fontColor: 'white'
};

export const OutlineNoFill = Template.bind({});

OutlineNoFill.args = {
	title: 'more ethx filters',
	color: 'transparent',
	fontColor: 'gray-400',
};
