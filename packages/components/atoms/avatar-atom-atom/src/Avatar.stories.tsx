import { Meta, Story } from '@storybook/react';
import React from 'react';

import { AvatarAtom, AvatarAtomProps } from './Avatar.atom';

export default {
	title: 'Atom/AvatarAtom',
	component: AvatarAtom,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<AvatarAtomProps> = args => <AvatarAtom {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
	name: 'Blake',
	img:
		'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
};
