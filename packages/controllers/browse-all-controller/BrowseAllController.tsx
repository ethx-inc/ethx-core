import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { BrowseAll } from '../../components/molecules/browse-all-molecule/src';

import { FilterContext } from '../../services/context/filter-context';

import { shopQuery } from '../../services/firebase/firebase.db';

export const BrowseAllController: FC = () => {
	const router = useRouter();
	const { filterData, setFilterData } = useContext(FilterContext);

	async function handleClick(category) {
		const { items, lastItem } = await shopQuery(category, []);
		setFilterData({ ...filterData, items, category, lastItem });
		router.push(`/shop/${category}/1`);
	}

	return <BrowseAll onClick={category => handleClick(category)} />;
};
