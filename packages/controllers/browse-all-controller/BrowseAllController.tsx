import React, { FC } from 'react';
import { BrowseAll } from '../../components/molecules/browse-all-molecule/src';

import { shopQuery } from '../../services/firebase/firebase.db';

export const BrowseAllController: FC = () => {
	async function handleClick(category) {
		const { items, lastItem } = await shopQuery(category, []);
		console.log(lastItem);
	}

	return <BrowseAll onClick={category => handleClick(category)} />;
};
