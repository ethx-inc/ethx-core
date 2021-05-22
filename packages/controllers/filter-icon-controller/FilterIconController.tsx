import React, { useContext, useEffect, useState } from 'react';
import { FilterIcon } from '../../components/atoms/filter-icon/src';

import { FilterContext } from '../../services/context/filter-context';

export interface FilterIconControllerProps {
	imgSource?: string;
	title?: string;
}

export const FilterIconController = ({
	imgSource,
	title,
}: FilterIconControllerProps): JSX.Element => {
	const [isSelected, setIsSelected] = useState(false);
	const { filterData, setFilterData } = useContext(FilterContext);
	const { category, selectedEthx } = filterData;

	function handleClick(selectedIcon) {
		if (!selectedEthx.includes(selectedIcon)) {
			selectedEthx.push(selectedIcon);
			setFilterData({
				...filterData,
				category,
				selectedEthx: [...selectedEthx],
			});
		} else {
			const index = selectedEthx.indexOf(selectedIcon);
			selectedEthx.splice(index, 1);
			setFilterData({
				...filterData,
				category,
				selectedEthx: [...selectedEthx],
			});
		}
	}

	useEffect(() => {
		if (selectedEthx.includes(title)) {
			setIsSelected(true);
		} else {
			setIsSelected(false);
		}
	}, [selectedEthx]);

	return (
		<FilterIcon
			onClick={selectedIcon => handleClick(selectedIcon)}
			title={title}
			imgSource={imgSource}
			isActive={isSelected}
		/>
	);
};
