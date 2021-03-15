import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './ButtonAtom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button',
};
