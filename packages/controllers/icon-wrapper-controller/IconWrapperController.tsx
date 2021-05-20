import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { IconWrapper } from '../../components/organisms/icon-wrapper-organism/src/IconWrapper.organism';

import { FilterContext } from '../../services/context/filter-context';

import { nextPageInQuery } from '../../services/firebase/firebase.db';

export const IconWrapperController: FC = () => {
	const router = useRouter();
	const { filterData, setFilterData } = useContext(FilterContext);

	async function handleClick(category) {
		const { items, firstItem, lastItem } = await nextPageInQuery(
			category,
			[],
		);
		setFilterData({
			...filterData,
			items,
			category,
			firstItem,
			lastItem,
		});
		router.push(`/shop/filter-results`);
	}

	return <IconWrapper onClick={category => handleClick(category)} />
	;
};