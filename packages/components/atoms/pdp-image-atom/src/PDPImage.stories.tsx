import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PDPImage, PDPImageProps } from './PDPImage.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/PDPImage' /* Title of the component  */,
	component: PDPImage /* component */,
	argTypes: {},
} as Meta;

const Template: Story<PDPImageProps> = args => <PDPImage {...args} />;

export const Base = Template.bind({});
Base.args = {};
