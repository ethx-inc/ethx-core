import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ButtonBrowse, ButtonBrowseProps } from './ButtonBrowse.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/ButtonBrowse' /* Title of the component  */,
	component: ButtonBrowse /* component */,
	argTypes: {
		color: { control: 'color' },
		fontColor: { control: 'gray-500' },
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<ButtonBrowseProps> = args => <ButtonBrowse {...args} />;

export const Base = Template.bind({});

Base.args = {
	title: 'by cause',
};
