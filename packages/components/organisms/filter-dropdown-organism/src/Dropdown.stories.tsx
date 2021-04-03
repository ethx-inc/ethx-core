import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Dropdown , DropdownProps } from './Dropdown.organism';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/Dropdown' /* Title of the component  */,
	component: Dropdown /* component */,
	argTypes: {
		borderColor : { control: 'borderColor'},
		color: { control : 'color' },
		fontColor: { control : 'fontColor'}
	},
} as Meta;

const Template: Story<DropdownProps> = args => <Dropdown {...args} />;

export const SolidFill = Template.bind({});
SolidFill.args = {
	borderColor: 'primary',
	color: 'primary',
	fontColor: 'white'
};

export const OutlineNoFill = Template.bind({});
OutlineNoFill.args = {
	borderColor: 'primary',
	color: 'gray-50',
	fontColor: 'gray-500'
};

