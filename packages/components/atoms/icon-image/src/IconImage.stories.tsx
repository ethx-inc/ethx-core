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
		// iconUrl: { control : 'iconUrl' }
	},
} as Meta;

const Template: Story<IconImageProps> = args => <IconImage {...args} />;

export const RoseOutline = Template.bind({});
RoseOutline.args = {
	// iconUrl: '/rice-icon.png',
	borderColor: 'primary'
}

export const GrayOutline = Template.bind({});
GrayOutline.args = {
	// iconUrl: '/rice-icon.png',
	borderColor: 'gray-300',
};
