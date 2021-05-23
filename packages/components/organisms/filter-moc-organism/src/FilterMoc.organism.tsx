import React from 'react';
import { useRouter } from 'next/router';
import { CategoryListController } from '../../../../controllers/category-list-controller/CategoryListController';
import { ButtonCTA } from '../../../atoms/button-cta/src';

export interface FilterMocProps {}

export const FilterMoc = (): JSX.Element => {
	const router = useRouter();
	return (
		<div className='mx-auto w-full lg:w-2/5'>
			<div className='flex flex-col justify-between mb-5 -mt-3 mx-5 lg:-mx-20'>
				<div className='flex flex-col'>
					<h4 className='text-primary text-center mb-2'>By Category</h4>
					<CategoryListController />
				</div>
				<div className='flex mx-auto justify-center w-40 my-3'>
					<ButtonCTA title='go' handleClick={() => null} />
				</div>
			</div>
		</div>
	);
};
