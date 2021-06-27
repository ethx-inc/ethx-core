import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AddProduct, AddProductProps } from './AddProduct.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/AddProduct' /* Title of the component  */,
	component: AddProduct /* component */,
	argTypes: {},
} as Meta;

const Template: Story<AddProductProps> = args => <AddProduct {...args} />;

export const Base = Template.bind({});

Base.args = {};
