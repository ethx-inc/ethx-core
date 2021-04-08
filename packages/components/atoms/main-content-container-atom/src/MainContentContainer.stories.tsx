import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	MainContentContainerAtom,
	MainContentContainerAtomProps,
} from './MainContentContainer.atom';

export default {
	title: 'Atom/MainContentContainer',
	component: MainContentContainerAtom,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<MainContentContainerAtomProps> = args => (
	<MainContentContainerAtom {...args} />
);

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
