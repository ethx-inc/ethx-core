import React from 'react';

import { MoreFilter } from '../../../atoms/more-filter-atom/src';

export interface FilterMocProps {
	borderColor?: string;
	color?: string;
	fontColor?: string;
	title?: string;
}

export const FilterMoc = ({
	borderColor,
	color,
	fontColor,
}: FilterMocProps): JSX.Element => {
	return (
		<div>
			{/* <div>
				<IconWrapper borderColor={borderColor} fontColor={fontColor} title={title} />
			</div> */}

			<div className='flex flex-col justify-between mx-5'>
				<div className='mb-8'>
					<MoreFilter
						color={color}
						fontColor={fontColor}
					/>
				</div>
				<div className='mb-8'>
					<MoreFilter
						color={color}
						fontColor={fontColor}
					/>
				</div>
				<div className='mb-8'>
					<MoreFilter
						color={color}
						fontColor={fontColor}
					/>
				</div>
			</div>
		</div>
	);
};
