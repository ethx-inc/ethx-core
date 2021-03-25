import { Meta, Story } from '@storybook/react';
import React from 'react';

import { NavBar, NavBarProps } from './NavBar.organism';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/NavBar' /* Title of the component  */,
	component: NavBar /* component */,
	argTypes: {},
} as Meta;

const Template: Story<NavBarProps> = args => <NavBar {...args} />;

export const primary = Template.bind({});

primary.args = {
	color: 'black',
};
