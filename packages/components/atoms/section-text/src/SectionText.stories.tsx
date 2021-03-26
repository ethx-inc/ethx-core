import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SectionText, SectionTextProps } from './SectionText.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/SectionText' /* Title of the component  */,
	component: SectionText /* component */,
	argTypes: {
		fontColor: { control: 'text-gray-400'}
		// font: { control: 'Roboto' | 'Consola' },
	},
} as Meta;

const Template: Story<SectionTextProps> = args => <SectionText {...args} />;

export const NoSubTitle = Template.bind({});

NoSubTitle.argTypes = {
	subtitle: { control : {disable: true } }
};

NoSubTitle.args = {
	title: 'testimonials'
};

export const TitleAndSubTitle = Template.bind({});

TitleAndSubTitle.args = {
	title: 'our ethical filter',
	subtitle: 'discover brands that align with what you care about',
};
