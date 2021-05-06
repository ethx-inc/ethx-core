import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CartSummary, CartSummaryProps } from './CartSummary.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/CartSummary' /* Title of the component  */,
	component: CartSummary /* component */,
	argTypes: {
		brandName: { control: 'brandName' },
		productName: { control: 'productName' },
		productPrice: { control: 'productPrice' },
	},
} as Meta;

const Template: Story<CartSummaryProps> = args => <CartSummary {...args} />;

export const Base = Template.bind({});

Base.args = {
	brandName: 'the best brand',
	productName: 'moisturizer',
	productPrice: '$20.99',
};
