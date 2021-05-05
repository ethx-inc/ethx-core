import { Meta, Story } from '@storybook/react';
import React from 'react';

import { QuantityPill, QuantityPillProps } from './QuantityPill.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/QuantityPill' /* Title of the component  */,
	component: QuantityPill /* component */,
	argTypes: {
		quantity: { control: 'quantity' },
		borderColor: { control: 'borderColor' },
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<QuantityPillProps> = args => <QuantityPill {...args} />;


export const Base = Template.bind({});

Base.args = {
	borderColor: 'primary',
	quantity: '1'
};
