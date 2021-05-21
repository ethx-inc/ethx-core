import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PlusSign, PlusSignProps } from './PlusSign.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/PlusSign' /* Title of the component  */,
	component: PlusSign /* component */,
	argTypes: {},
} as Meta;

const Template: Story<PlusSignProps> = args => <PlusSign {...args} />;

export const Base = Template.bind({});

Base.args = {};
