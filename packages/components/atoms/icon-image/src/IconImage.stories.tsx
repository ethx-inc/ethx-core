import { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconImage, IconImageProps } from './IconImage.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/IconImage' /* Title of the component  */,
	component: IconImage /* component */,
	argTypes: {
		borderColor: { control: 'borderColor' },

		color: { control: 'color' },
	},
} as Meta;

const Template: Story<IconImageProps> = args => <IconImage {...args} />;

export const RoseOutline = Template.bind({});
RoseOutline.args = {
	borderColor: 'primary',
	color: 'gray-50',
};

export const GrayOutline = Template.bind({});
GrayOutline.args = {
	borderColor: 'gray-300',
	color: 'gray-50',
};
