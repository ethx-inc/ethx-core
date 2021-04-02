import React from 'react';

import '../../../../../styles/globals.css';

export interface FilterDropdownProps {
	borderColor?: string;
	color?: string;
	fontColor?: string;
}

export const FilterDropdown = ({
	borderColor,
	color,
	fontColor

}: FilterDropdownProps): JSX.Element => {
	const sampleData = new Array(7).fill("more filter options");
	return (
		
		<div
			className={`text-sm lg:text-lg w-3/5 lg:w-2/5 border-2 border-${borderColor} bg-transparent rounded-b-lg flex justify-between overflow-auto overscroll-auto h-24
			${color} : bg-${color} ? bg-transparent `}
			style={{ fontFamily: 'Roboto' }}>
			<ul className={`text-left mb-3`}>
				{sampleData.map((item, i) => (
					<li key={i} className={`text-${fontColor}`}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
