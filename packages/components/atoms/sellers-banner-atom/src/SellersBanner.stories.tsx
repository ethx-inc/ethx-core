import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SellersBanner, SellersBannerProps } from './SellersBanner.atom';

// eslint-disable-next-line import/no-unresolved
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
export default {
	title: 'Atom/SellersBanner' /* Title of the component  */,
	component: SellersBanner /* component */,
	argTypes: {
		brandName : { control: 'brandName' }
	},
} as Meta;

const Template: Story<SellersBannerProps> = args => <SellersBanner {...args} />;

export const Base = Template.bind({});
Base.args = {
	brandName: 'the best brand'

};

