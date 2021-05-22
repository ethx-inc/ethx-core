import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CategoryList, CategoryListProps } from './CategoryList.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/CategoryList' /* Title of the component  */,
	component: CategoryList /* component */,
	argTypes: {
		color: { control: 'color' },
		fontColor: { control: 'fontColor' },
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<CategoryListProps> = args => <CategoryList {...args} />;

export const Base = Template.bind({});

Base.args = {

};

