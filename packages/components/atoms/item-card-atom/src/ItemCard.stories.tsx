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

};
