import { Meta, Story } from '@storybook/react';
import React from 'react';

import { RestartSign, RestartSignProps } from './RestartSign.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/RestartSign' /* Title of the component  */,
	component: RestartSign /* component */,
	argTypes: {
	},
} as Meta;

const Template: Story<RestartSignProps> = args => <RestartSign {...args} />;

export const Base = Template.bind({});

Base.args = {
};

