import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	SignInFormMolecule,
	SignInFormMoleculeProps,
} from './SignInForm.molecule';

export default {
	title: 'Molecule/SignInForm',
	component: SignInFormMolecule,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<SignInFormMoleculeProps> = args => (
	<SignInFormMolecule {...args} />
);

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
