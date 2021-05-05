import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CheckoutTray, CheckoutTrayProps } from './CheckoutTray.molecule';

export default {
	title: 'Molecule/CheckoutTray',
	component: CheckoutTray,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<CheckoutTrayProps> = args => <CheckoutTray {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
