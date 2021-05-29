import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PDPIngredient, PDPIngredientProps } from './PDPIngredient.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/PDPIngredient' /* Title of the component  */,
	component: PDPIngredient /* component */,
	argTypes: {},
} as Meta;

const Template: Story<PDPIngredientProps> = args => <PDPIngredient {...args} />;

export const Base = Template.bind({});
Base.args = {};
