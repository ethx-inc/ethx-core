import { Meta, Story } from '@storybook/react';
import React from 'react';

import { VendorHome, VendorHomeProps } from './VendorHome.molecule';

export default {
	title: 'Molecule/VendorHome',
	component: VendorHome,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<VendorHomeProps> = args => <VendorHome {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
