import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SellersInfo, SellersInfoProps } from './SellersInfo.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/SellersInfo' /* Title of the component  */,
	component: SellersInfo /* component */,
	argTypes: {
		shopOwner: { control: 'shopOwner' },
		memberSince: { control: 'memberSince' },
	},
} as Meta;

const Template: Story<SellersInfoProps> = args => <SellersInfo {...args} />;


export const Base = Template.bind({});
Base.args = {

};
