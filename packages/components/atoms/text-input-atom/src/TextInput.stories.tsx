import { Meta, Story } from '@storybook/react';
import React from 'react';

import { TextInput, TextInputProps } from './TextInput.atom';

export default {
	title: 'Atom/TextInput',
	component: TextInput,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<TextInputProps> = args => <TextInput {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
	placeholder: 'email',
};
