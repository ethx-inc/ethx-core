import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CartCheckout, CartCheckoutProps } from './CartCheckout.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/CartCheckout' /* Title of the component  */,
	component: CartCheckout /* component */,
	argTypes: {
		subtotal: { control: 'subtotal' },
		shipping: { control: 'shipping' },
		tax: { control: 'tax' },
		estTotal: { control: 'estTotal' }

	},
} as Meta;

const Template: Story<CartCheckoutProps> = args => <CartCheckout {...args} />;

export const Base = Template.bind({});

Base.args = {
	subtotal: '$25.00',
	shipping: '$5.99',
	tax: 'Calculated at Checkout',
	estTotal: '$30.99'
};
