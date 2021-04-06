import React from 'react';

import { Dropdown } from '../../../organisms/filter-dropdown-organism/src/Dropdown.organism';
import { IconWrapper } from '../../../organisms/icon-wrapper-organism/src/IconWrapper.organism';

export interface FilterMocProps {
	borderColor?: string;
	color?: string;
	fontColor?: string;
	title?:string;
}

export const FilterMoc = ({
	borderColor,
	color,
	fontColor,
	title,
	
}: FilterMocProps): JSX.Element => {

	return (
		<div>

			{/* <div>
				<IconWrapper borderColor={borderColor} fontColor={fontColor} title={title} />
			</div> */}

			<div className={`flex flex-col justify-between`}>
				<div className={`mb-8`}>
					<Dropdown borderColor={borderColor} color={color} fontColor={fontColor} />
				</div>
				<div className={`mb-8`}>
					<Dropdown borderColor={borderColor} color={color} fontColor={fontColor} />
				</div>
				<div className={`mb-8`}>
					<Dropdown borderColor={borderColor} color={color} fontColor={fontColor} />
				</div>
			</div>

		</div>
	);
};
