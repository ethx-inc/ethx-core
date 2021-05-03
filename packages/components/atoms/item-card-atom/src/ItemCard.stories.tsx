import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ItemCard, ItemCardProps } from './ItemCard.atom';

export default {
	title: 'Atom/ItemCard',
	argTypes: {},
} as Meta;

const Template: Story<ItemCardProps> = args => <ItemCard {...args} />;

export const Base = Template.bind({});

Base.args = {
	brandName: 'Sephora',
	productName: 'lipstick',
	productPrice: '10',
	productImg:
		'https://us.123rf.com/450wm/hstrongart/hstrongart1809/hstrongart180900009/108380525-luxury-lipstick-isolated-on-cream-color-background-in-3d-illustration.jpg?ver=6',
};
