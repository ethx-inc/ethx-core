import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './Button.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/Button' /* Title of the component  */,
	component: Button /* component */,
	argTypes: {
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const DarkMode = Template.bind({});

DarkMode.args = {
	title: 'Button',
};

export const LightMode = Template.bind({});

LightMode.args = {
	title: 'Light Button',
};
