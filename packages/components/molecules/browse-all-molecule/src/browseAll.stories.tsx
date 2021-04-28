import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BrowseAll, BrowseAllProps } from './browseAll.molecule';

export default {
	title: 'Molecule/BrowseAll',
	component: BrowseAll,
	argTypes: {
		/* agrs go here */
	},
} as Meta;

const Template: Story<BrowseAllProps> = args => <BrowseAll {...args} />;

export const Base = Template.bind({});

Base.args = {
	/* agrs go here */
};
