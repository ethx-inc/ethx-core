import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ErrorMessage } from './ErrorMessage.atom';

export default {
	title: 'Atom/ErrorMessage',
	component: ErrorMessage,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story = args => <ErrorMessage {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
