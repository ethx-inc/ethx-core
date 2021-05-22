import React from 'react';
import { useRouter } from 'next/router';
import { CategoryList } from '../../../atoms/category-list-atom/src';
import { ButtonCTA } from '../../../atoms/button-cta/src';

import { onboardVendor } from '../../../../services/firebase/firebase.utils';

export interface FilterMocProps {}

export const FilterMoc = (): JSX.Element => {
	const router = useRouter();
	return (
		<div className='mx-auto w-full lg:w-2/5'>
			<div className='flex flex-col justify-between mb-5 -mt-3 mx-5 lg:-mx-20'>
				<div className='flex flex-col'>
					<h4 className='text-primary text-center mb-2'>By Category</h4>
					<CategoryList />
				</div>
				<div className='flex mx-auto justify-center w-40 my-3'>
					<ButtonCTA
						title='go'
						handleClick={() =>
							onboardVendor().then(link => router.push(link.data.url))
						}
					/>
				</div>
			</div>
		</div>
	);
};
