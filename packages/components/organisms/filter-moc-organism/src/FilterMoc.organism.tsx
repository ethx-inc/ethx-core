import React from 'react';
import { useRouter } from 'next/router';
import { MoreFilter } from '../../../atoms/more-filter-atom/src';
import { ButtonCTA } from '../../../atoms/button-cta/src';

import { onboardVendor } from '../../../../services/firebase/firebase.utils';

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
				<div className='flex flex-col'>
					<h4 className='text-primary text-center mb-2'>By Category</h4>
					<MoreFilter color={color} fontColor={fontColor} />
				</div>
				<div className='flex mx-auto justify-center w-40 my-3'>
					<ButtonCTA
						title='go'
						handleClick={() => onboardVendor().then(link => console.log(link))}
					/>
				</div>
			</div>
		</div>
	);
};
