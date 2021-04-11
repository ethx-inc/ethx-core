import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SubmitButton, SubmitButtonProps } from './SubmitButton.atom';

export default {
	title: 'Atom/SubmitButton',
	component: SubmitButton,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<SubmitButtonProps> = args => <SubmitButton {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
	title: 'button',
};
