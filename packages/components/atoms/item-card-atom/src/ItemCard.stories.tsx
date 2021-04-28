import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ItemCard, ItemCardProps } from './ItemCard.atom';

export default {
	title: 'Atom/ItemCard',
	argTypes: {},
} as Meta;

const Template: Story<ItemCardProps> = args => (
	<div>
		<ItemCard {...args} /> <ItemCard {...args} /> <ItemCard {...args} />{' '}
		<ItemCard {...args} />
	</div>
);

export const Base = Template.bind({});

Base.args = {
	name: 'Marc Jacobs',
	price: '$65',
	img:
		'https://www.marcjacobsbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-MJB-Library/default/v1617992992196/homepage/2021/20210406-30-markdown-slot-c-extra-shot.jpg',
};
