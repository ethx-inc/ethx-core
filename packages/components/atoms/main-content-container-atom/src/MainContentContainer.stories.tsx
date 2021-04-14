import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	MainContentContainer,
	MainContentContainerProps,
} from './MainContentContainer.atom';

export default {
	title: 'Atom/MainContentContainer',
	component: MainContentContainer,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<MainContentContainerProps> = args => (
	<MainContentContainer {...args} />
);

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
