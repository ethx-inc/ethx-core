import { useRouter } from 'next/router';
import React, { FC, useContext } from 'react';

import { BrowseAll } from '../../components/molecules/browse-all-molecule/src';
import { FilterContext } from '../../services/context/filter-context';
import { nextPageInQuery } from '../../services/firebase/firebase.db';

export const BrowseAllController: FC = () => {
	const router = useRouter();
	const { filterData, setFilterData } = useContext(FilterContext);

	async function handleClick(category) {
		const { items, firstItem, lastItem } = await nextPageInQuery(category, []);
		// clear any filters the user might have selected upon cleaning shop with the belief that if a user clicks shop they want to see all products available to them.
		const selectedEthx = [];
		setFilterData({
			...filterData,
			selectedEthx,
			items,
			category,
			firstItem,
			lastItem,
		});
		router.push(`/shop/${category}`);
	}

	return <BrowseAll onClick={category => handleClick(category)} />;
};
