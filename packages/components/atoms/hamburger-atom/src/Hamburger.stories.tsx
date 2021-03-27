import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Hamburger, HamburgerProps } from './Hamburger.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/Hamburger' /* Title of the component  */,
	component: Hamburger /* component */,
	argTypes: {},
} as Meta;

const Template: Story<HamburgerProps> = args => <Hamburger {...args} />;

export const NavBar = Template.bind({});

NavBar.args = {};
