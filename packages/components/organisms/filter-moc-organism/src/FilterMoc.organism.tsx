import React from 'react';
import { MoreFilter } from '../../../atoms/more-filter-atom/src';
import { ButtonCTA } from '../../../atoms/button-cta/src';

export interface FilterMocProps {
}

export const FilterMoc = ({

}: FilterMocProps): JSX.Element => {

	return (
		<div className='mx-auto w-full lg:w-2/5'>
			<div className='flex flex-col justify-between mb-5 -mt-3 mx-5 lg:-mx-20'>
				<div className='flex flex-col'>
					<h4 className='text-primary text-center mb-2'>By Category</h4>
					<MoreFilter />
				</div>
				<div className='flex mx-auto justify-center w-40 my-3'>
					<ButtonCTA title='go' />
				</div>
			</div>
		</div>
	);
};
