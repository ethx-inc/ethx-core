import React, { useState } from 'react';

// the data we will be storing and manipulating
export type FilterData = {
	category: string;
	selectedEthx: string[];
	preferredEthx: string[];
	items;
	lastItem?;
	page?: number;
};

export type FilterProps = {
	// access point to the data
	filterData: FilterData;
	// setter for the data
	setFilterData: (filter: FilterData) => void;
};

// the created context that can be used elsewhere to gain access to loginData and set it
export const FilterContext = React.createContext<FilterProps>({
	filterData: {
		category: '',
		selectedEthx: [],
		preferredEthx: [],
		items: [],
		lastItem: null,
		page: 1,
	},
	setFilterData: filter => console.warn('no login provider'),
});

export interface FilterProviderProps {
	/* Props here */
	children?;
}

// this is the provider that wraps the outer most element in your ap to provide context access to nested components
export const FilterProvider = ({
	children,
}: FilterProviderProps): JSX.Element => {
	const [filterData, setFilterData] = useState<FilterData>({
		category: '',
		selectedEthx: [],
		preferredEthx: [],
		items: [],
		lastItem: null,
		page: 1,
	});

	return (
		<FilterContext.Provider value={{ filterData, setFilterData }}>
			{children}
		</FilterContext.Provider>
	);
};
