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
	fontColor,
}: FilterDropdownProps): JSX.Element => {
	const sampleData: { text: string; id: number }[] = [];
	for (let index = 0; index < 7; index += 1) {
		sampleData[index] = { text: 'more filter options', id: index };
	}
	return (
		<div
			className={`text-sm lg:text-lg w-3/5 lg:w-2/5 border-2 border-t-0 rounded-b-lg overflow-auto overscroll-auto h-24
			${ borderColor ? `border-${borderColor}` : 'border-primary' }
			${color ? `bg-${color}` : 'bg-gray-50' } ` }
			style={{ fontFamily: 'Roboto' }}>
			<ul className='text-left mb-3'>
				{sampleData.map(item => (
					<li key={item.id} className={`text-${fontColor}`}>
						{item.text}
					</li>
				))}
			</ul>
		</div>
	);
};
