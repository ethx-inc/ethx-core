import React from 'react';

import { MoreFilter } from '../../../atoms/more-filter-atom/src';
import { IconWrapper } from '../../icon-wrapper-organism/src/IconWrapper.organism'

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
	title,
}: FilterMocProps): JSX.Element => {
	return (
		<div className='mx-auto mt-5 lg:border-2 lg:border-primary lg:rounded-lg lg:bg-gray-100 w-full lg:w-2/5'>
			<div className=''>
				<IconWrapper borderColor={borderColor} fontColor={fontColor} title={title} />
			</div>

			<div className='flex flex-col justify-between lg:my-8 mx-5 lg:-mx-20'>
				<div className='mb-3'>
					<MoreFilter
						color={color}
						fontColor={fontColor}
					/>
				</div>
				<div className='mb-3'>
					<MoreFilter
						color={color}
						fontColor={fontColor}
					/>
				</div>
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
