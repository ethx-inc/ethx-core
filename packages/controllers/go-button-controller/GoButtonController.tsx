import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { ButtonCTA } from '../../components/atoms/button-cta/src';

import { FilterContext } from '../../services/context/filter-context';

import { nextPageInQuery } from '../../services/firebase/firebase.db';

export const GoButtonController: FC = () => {
	const router = useRouter();
	const { filterData, setFilterData } = useContext(FilterContext);

	async function handleClick() {
		const { items, firstItem, lastItem } = await nextPageInQuery(
			filterData.category,
			filterData.selectedEthx,
		);
		setFilterData({
			...filterData,
			items,
			category: filterData.category,
			firstItem,
			lastItem,
		});
		router.push(`/shop/filter-results`);
	}

	return <ButtonCTA handleClick={() => handleClick()} title='go' />;
};
