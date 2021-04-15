import { Meta, Story } from '@storybook/react';
import React from 'react';

import { PDPAbout, PDPAboutProps } from './PDPAbout.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/PDPAbout' /* Title of the component  */,
	component: PDPAbout /* component */,
	argTypes: {
		fontColor: { control: 'fontColor' },
		brandDetails: { control: 'brandDetails' }
	},
} as Meta;

const Template: Story<PDPAboutProps> = args => <PDPAbout {...args} />;

export const RoseText = Template.bind({});
RoseText.args = {
	fontColor: 'primary',
	brandDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus tellus sit amet ligula pretium, quis consectetur dui euismod. Pellentesque efficitur eleifend vehicula. Vivamus vulputate leo vitae libero tempor, sed molestie augue pretium. Morbi semper, justo et tincidunt sagittis, magna metus euismod ipsum, at congue odio leo ac dolor. Cras ut lobortis tellus. Aenean massa tortor, finibus ac tristique sed, auctor ac mi. Donec quis placerat lacus. Donec placerat elementum leo, et feugiat orci euismod at. Maecenas sed gravida nunc. Sed sed nibh tellus. Mauris vulputate, ex convallis tempus consectetur, augue erat euismod mi, in vestibulum ex leo id ligula. Duis dictum euismod leo eleifend laoreet. Nunc finibus turpis leo, a semper quam pellentesque eget.'
};

export const GrayText = Template.bind({});
GrayText.args = {
	fontColor: 'gray-500',
	brandDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus tellus sit amet ligula pretium, quis consectetur dui euismod. Pellentesque efficitur eleifend vehicula. Vivamus vulputate leo vitae libero tempor, sed molestie augue pretium. Morbi semper, justo et tincidunt sagittis, magna metus euismod ipsum, at congue odio leo ac dolor. Cras ut lobortis tellus. Aenean massa tortor, finibus ac tristique sed, auctor ac mi. Donec quis placerat lacus. Donec placerat elementum leo, et feugiat orci euismod at. Maecenas sed gravida nunc. Sed sed nibh tellus. Mauris vulputate, ex convallis tempus consectetur, augue erat euismod mi, in vestibulum ex leo id ligula. Duis dictum euismod leo eleifend laoreet. Nunc finibus turpis leo, a semper quam pellentesque eget.'
};
