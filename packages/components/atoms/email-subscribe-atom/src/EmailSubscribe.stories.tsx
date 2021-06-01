import { Meta, Story } from '@storybook/react';
import React from 'react';

import { EmailSubscribe, EmailSubscribeProps } from './EmailSubscribe.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/EmailSubscribe' /* Title of the component  */,
	component: EmailSubscribe /* component */,
	argTypes: {},
} as Meta;

const Template: Story<EmailSubscribeProps> = args => (
	<EmailSubscribe {...args} />
);

export const Base = Template.bind({});

Base.args = {};
