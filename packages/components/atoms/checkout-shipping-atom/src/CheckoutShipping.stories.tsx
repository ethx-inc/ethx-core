import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	CheckoutShipping,
	CheckoutShippingProps,
} from './CheckoutShipping.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/CheckoutShipping' /* Title of the component  */,
	component: CheckoutShipping /* component */,
	argTypes: {},
} as Meta;

const Template: Story<CheckoutShippingProps> = args => (
	<CheckoutShipping {...args} />
);

export const Base = Template.bind({});

Base.args = {};
