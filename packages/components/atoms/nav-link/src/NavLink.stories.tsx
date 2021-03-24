import { Meta, Story } from '@storybook/react';
import React from 'react';

import { NavLink, NavLinkProps } from './NavLink.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/NavLink' /* Title of the component  */,
	component: NavLink /* component */,
	argTypes: {},
} as Meta;

const Template: Story<NavLinkProps> = args => <NavLink {...args} />;

export const NavBar = Template.bind({});

NavBar.args = {
	label: 'Home',
	href:
		'https://nextjs.org/learn/basics/navigate-between-pages/link-component',
};
