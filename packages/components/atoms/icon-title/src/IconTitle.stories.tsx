import { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconTitle, IconTitleProps } from './IconTitle.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/IconTitle' /* Title of the component  */,
	component: IconTitle /* component */,
	argTypes: {
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
		fontColor: { control: 'fontColor' },
	},
} as Meta;

const Template: Story<IconTitleProps> = args => <IconTitle {...args} />;

export const RoseText = Template.bind({});
RoseText.args = {
	fontColor: 'primary',
};

export const GrayText = Template.bind({});
GrayText.args = {
	fontColor: 'gray-500',
};
