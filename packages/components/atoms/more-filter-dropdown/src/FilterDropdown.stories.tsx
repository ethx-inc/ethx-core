import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FilterDropdown, FilterDropdownProps } from './FilterDropdown.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/FilterDropdown' /* Title of the component  */,
	component: FilterDropdown /* component */,
	argTypes: {
		borderColor: { control: 'borderColor' },
		color: { control: 'color' },
		fontColor: { control: 'fontColor' },
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

// export const data = new Array(7).fill("more filter options");

const Template: Story<FilterDropdownProps> = args => (
	<FilterDropdown {...args} />
);

export const SolidFill = Template.bind({});

SolidFill.args = {
	borderColor: 'primary',
	color: 'primary',
	fontColor: 'white',
};

export const OutlineNoFill = Template.bind({});

OutlineNoFill.args = {
	borderColor: 'primary',
	color: 'gray-50',
	fontColor: 'gray-500',
};
