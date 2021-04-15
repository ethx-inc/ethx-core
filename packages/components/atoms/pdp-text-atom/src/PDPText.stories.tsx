import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PDPText, PDPTextProps } from './PDPText.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/PDPText' /* Title of the component  */,
	component: PDPText /* component */,
	argTypes: {
		bulletOne: { control: 'bulletOne'},
		bulletTwo: { control: 'bulletTwo'},
		bulletThree: { control: 'bulletThree'},
		fontColor: { control: 'fontColor' },
		productDetails: { control: 'productDetails' },
		productName: { control: 'productName' }
	},
} as Meta;

const Template: Story<PDPTextProps> = args => <PDPText {...args} />;

export const RoseText = Template.bind({});
RoseText.args = {
	bulletOne: 'short form product details',
	bulletTwo: 'short form product details',
	bulletThree: 'short form product details',
	fontColor: 'primary',
	productDetails: 'long form product description (benefits, ingredients, etc.)',
	productName: 'Brightening Moisturizer'
};

export const GrayText = Template.bind({});
GrayText.args = {
	bulletOne: 'short form product details',
	bulletTwo: 'short form product details',
	bulletThree: 'short form product details',
	fontColor: 'gray-500',
	productDetails: 'long form product description (benefits, ingredients, etc.)',
	productName: 'Brightening Moisturizer'
};
