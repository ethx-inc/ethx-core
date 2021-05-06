import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CheckoutPayment, CheckoutPaymentProps } from './CheckoutPayment.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/CheckoutPayment' /* Title of the component  */,
	component: CheckoutPayment /* component */,
	argTypes: {},
} as Meta;

const Template: Story<CheckoutPaymentProps> = args => (
	<CheckoutPayment {...args} />
);

export const Base = Template.bind({});

Base.args = {};
