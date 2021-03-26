import { Meta, Story } from '@storybook/react';
import React from 'react';

import { NavButton, NavButtonProps } from './NavButton.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/NavButton' /* Title of the component  */,
	component: NavButton /* component */,
	argTypes: {},
} as Meta;

const Template: Story<NavButtonProps> = args => <NavButton {...args} />;

export const NavBar = Template.bind({});

NavBar.args = {
	label: 'sign in',
};
