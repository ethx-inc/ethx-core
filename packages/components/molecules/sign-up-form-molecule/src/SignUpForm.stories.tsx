import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SignUpForm, SignUpFormProps } from './SignUpForm.molecule';

export default {
	title: 'Molecule/SignUpForm',
	component: SignUpForm,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<SignUpFormProps> = args => <SignUpForm {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
