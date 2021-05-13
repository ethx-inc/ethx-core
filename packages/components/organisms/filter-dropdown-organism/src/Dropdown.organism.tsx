import React from 'react';

import { MoreFilter } from '../../../atoms/more-filter-atom/src/MoreFilter.atom';

export interface DropdownProps {
	borderColor?: string;
	color?: string;
	fontColor?: string;
}

export const Dropdown = ({ color, fontColor }: DropdownProps): JSX.Element => {
	const [filterOpen, setFilterOpen] = React.useState(false);
	return (
		<div>
			<div>
				<MoreFilter
					onClick={() => setFilterOpen(!filterOpen)}
					color={color}
					fontColor={fontColor}
				/>
			</div>
		</div>
	);
};
