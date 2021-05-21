import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FilterIcon, FilterIconProps } from './FilterIcon.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/FilterIcon' /* Title of the component  */,
	component: FilterIcon /* component */,
	argTypes: {},
} as Meta;

const Template: Story<FilterIconProps> = args => <FilterIcon {...args} />;

export const Base = Template.bind({});
Base.args = {};
