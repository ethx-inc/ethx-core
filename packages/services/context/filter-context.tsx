import React, { useState, useEffect } from 'react';

// the data we will be storing and manipulating
export type FilterData = {
	category: string;
	selectedEthx: string[];
	preferredEthx: string[];
	items;
	firstItem?;
	lastItem?;
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
		firstItem: null,
		lastItem: null,
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
	const [filterData, setFilterData] = useState<FilterData>(() => {
		if (typeof window !== 'undefined') {
			const stickyFilter = window.localStorage.getItem('filter');
			if (stickyFilter !== null) {
				return JSON.parse(stickyFilter);
			}
		}
		return {
			category: '',
			selectedEthx: [],
			preferredEthx: [],
			items: [],
			firstItem: null,
			lastItem: null,
		};
	});

	useEffect(() => {
		window.localStorage.setItem('filter', JSON.stringify(filterData));
	}, [filterData]);

	return (
		<FilterContext.Provider value={{ filterData, setFilterData }}>
			{children}
		</FilterContext.Provider>
	);
};
