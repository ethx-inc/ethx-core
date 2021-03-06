import React from 'react';
import { useRouter } from 'next/router';
import { CategoryListController } from '../../../../controllers/category-list-controller/CategoryListController';
import { GoButtonController } from '../../../../controllers/go-button-controller/GoButtonController';

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
				<div className='flex flex-col text-center mt-3 text-gray-500'>
					<h4>Ability to shop with our ethical filter is coming soon.</h4>
				</div>
				{/* <div className='flex mx-auto justify-center w-40 my-3'>
					
					<GoButtonController />
				</div> */}
			</div>
		</div>
	);
};
