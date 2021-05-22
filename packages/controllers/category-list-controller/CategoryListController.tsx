import React, { useContext, useState } from 'react';
import { CategoryList } from '../../components/atoms/category-list-atom/src';

import { FilterContext } from '../../services/context/filter-context';

export const CategoryListController = (): JSX.Element => {
	const [selected, setSelected] = useState('');
	const { filterData, setFilterData } = useContext(FilterContext);

	function handleClick(selectedCategory) {
		setFilterData({
			...filterData,
			category: selectedCategory,
		});
		setSelected(selectedCategory);
	}

	return (
		<CategoryList
			handleClick={selectedCategory => handleClick(selectedCategory)}
			isActive={selected}
		/>
	);
};
