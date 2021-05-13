import React from 'react';
import { MoreFilter } from '../../../atoms/more-filter-atom/src';

export interface FilterMocProps {
	color?: string;
	fontColor?: string;
}

export const FilterMoc = ({
	color,
	fontColor,
}: FilterMocProps): JSX.Element => {
	return (
		<div className='mx-auto w-full lg:w-2/5'>
			<div className='flex flex-col justify-between mb-5 -mt-3 mx-5 lg:-mx-20'>
				<div className=''>
					<MoreFilter
						color={color}
						fontColor={fontColor}
					/>
				</div>
			</div>
		</div>
	);
};
