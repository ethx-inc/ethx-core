import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ItemCard } from '../../../atoms/item-card-atom/src/ItemCard.atom';

import { ItemCardGrid, ItemCardGridProps } from './ItemCardGrid.molecule';

export default {
	title: 'Molecule/ItemCardGrid' /* Title of the component  */,
	component: ItemCardGrid /* component */,
	argTypes: {},
} as Meta;

const Template: Story<ItemCardGridProps> = args => (
	<ItemCardGrid {...args}>
		<ItemCard
			name='Marc Jacobs'
			price='$65'
			img='https://www.marcjacobsbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-MJB-Library/default/v1617992992196/homepage/2021/20210406-30-markdown-slot-c-extra-shot.jpg'
		/>
		<ItemCard
			name='Marc Jacobs'
			price='$65'
			img='https://www.marcjacobsbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-MJB-Library/default/v1617992992196/homepage/2021/20210406-30-markdown-slot-c-extra-shot.jpg'
		/>
		<ItemCard
			name='Marc Jacobs'
			price='$65'
			img='https://www.marcjacobsbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-MJB-Library/default/v1617992992196/homepage/2021/20210406-30-markdown-slot-c-extra-shot.jpg'
		/>
		<ItemCard
			name='Marc Jacobs'
			price='$65'
			img='https://www.marcjacobsbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-MJB-Library/default/v1617992992196/homepage/2021/20210406-30-markdown-slot-c-extra-shot.jpg'
		/>
	</ItemCardGrid>
);

export const Primary = Template.bind({});

Primary.args = {
	name: 'Marc Jacobs',
	price: '$65',
	img:
		'https://www.marcjacobsbeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-MJB-Library/default/v1617992992196/homepage/2021/20210406-30-markdown-slot-c-extra-shot.jpg',
};
