import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SignInForm, SignInFormProps } from './SignInForm.molecule';

export default {
	title: 'Molecule/SignInForm',
	component: SignInForm,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<SignInFormProps> = args => <SignInForm {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
