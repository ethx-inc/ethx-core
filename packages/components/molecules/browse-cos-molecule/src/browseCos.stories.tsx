import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BrowseCos, BrowseCosProps } from './browseCos.molecule';

export default {
	title: 'Molecule/BrowseCos',
	component: BrowseCos,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<BrowseCosProps> = args => <BrowseCos {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
