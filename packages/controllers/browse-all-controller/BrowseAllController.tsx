import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { BrowseAll } from '../../components/molecules/browse-all-molecule/src';

import { FilterContext } from '../../services/context/filter-context';

import {
	shopQuery,
	nextPageInQuery,
} from '../../services/firebase/firebase.db';

export const BrowseAllController: FC = () => {
	const router = useRouter();
	const { filterData, setFilterData } = useContext(FilterContext);

	async function handleClick(category) {
		const query = shopQuery(category, []);
		const { items, firstItem, lastItem } = await nextPageInQuery(query);
		setFilterData({ ...filterData, items, category, firstItem, lastItem });
		router.push(`/shop/${category}`);
	}

	return <BrowseAll onClick={category => handleClick(category)} />;
};
