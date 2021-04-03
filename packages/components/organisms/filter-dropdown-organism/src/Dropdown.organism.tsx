import React from 'react';

import { MoreFilter } from '../../../atoms/more-filter-atom/src/MoreFilter.atom';
import { FilterDropdown } from '../../../atoms/more-filter-dropdown/src/FilterDropdown.atom';

export interface DropdownProps {
	borderColor?: string;
	color?: string;
	fontColor?: string;
}

export const Dropdown = ({
	borderColor,
	color,
	fontColor,
	
}: DropdownProps): JSX.Element => {
	const [filterOpen, setFilterOpen] = React.useState(false);
	return (

		<div>
			<div>
				<MoreFilter onClick={() => setFilterOpen(!filterOpen)} color={color} fontColor={fontColor} />
			</div>
			<div className={`${ filterOpen ? 'flex flex-col' : ' hidden' }`}>
				<FilterDropdown borderColor={borderColor} fontColor={fontColor} color={color}/>
			</div>
		</div>
	);
};
