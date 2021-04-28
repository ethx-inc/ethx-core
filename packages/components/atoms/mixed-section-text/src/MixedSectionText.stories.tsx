import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
	MixedSectionText,
	MixedSectionTextProps,
} from './MixedSectionText.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/MixedSectionText' /* Title of the component  */,
	component: MixedSectionText /* component */,
	argTypes: {
		title: { control: 'title' },
		subtitle: { control: 'subtitle' },
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<MixedSectionTextProps> = args => (
	<MixedSectionText {...args} />
);

export const Base = Template.bind({});

Base.args = {
	title: 'browse',
	subtitle: 'all products',
};
