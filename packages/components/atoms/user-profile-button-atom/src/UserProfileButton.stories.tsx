import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	UserProfileButton,
	UserProfileButtonProps,
} from './UserProfileButton.atom';

export default {
	title: 'Atom/UserProfileButton',
	component: UserProfileButton,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<UserProfileButtonProps> = args => (
	<UserProfileButton {...args} />
);

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
