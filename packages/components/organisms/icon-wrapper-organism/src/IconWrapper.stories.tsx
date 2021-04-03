import { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconWrapper, IconWrapperProps } from './IconWrapper.organism';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/IconWrapper' /* Title of the component  */,
	component: IconWrapper /* component */,
	argTypes: {
		borderColor: { control : 'borderColor'},
		fontColor: { control: 'fontColor'},
		title: {
			control: {
				type: 'select',
				options: [
					'Mom Owned',
					'Single Mom Owned',
					'Dad Owned',
					'Kid Owned',
					'Veteren Owned',
					'Black Owned',
					'Latinx Owned',
					'Teacher Owned',
					'First Responder Owned',
					'Giving Back',
					'Sustainable Packaging',
				],
			},
		},
	},
} as Meta;

const Template: Story<IconWrapperProps> = args => <IconWrapper {...args} />;

export const GrayIcon = Template.bind({});
GrayIcon.args = {
	borderColor: 'gray-300',
	fontColor: 'gray-500'
};

export const RoseIcon = Template.bind({});
RoseIcon.args = {
	borderColor: 'primary',
	fontColor: 'primary'
}


