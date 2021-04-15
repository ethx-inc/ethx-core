import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PDPMolecule, PDPMoleculeProps } from './PDP.molecule';

export default {
	title: 'Molecule/PDPMolecule',
	component: PDPMolecule,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<PDPMoleculeProps> = args => <PDPMolecule {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
