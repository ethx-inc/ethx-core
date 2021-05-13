import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Download, DownloadProps } from './DownloadAtom.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/Download' /* Title of the component  */,
	component: Download /* component */,
	argTypes: {},
} as Meta;

const Template: Story<DownloadProps> = args => <Download {...args} />;

export const Base = Template.bind({});

Base.args = {};
