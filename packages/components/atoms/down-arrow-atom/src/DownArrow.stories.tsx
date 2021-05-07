import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DownArrow, DownArrowProps } from './DownArrow.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/DownArrow' /* Title of the component  */,
	component: DownArrow /* component */,
	argTypes: {},
} as Meta;

const Template: Story<DownArrowProps> = args => <DownArrow {...args} />;

export const Base = Template.bind({});

Base.args = {};
