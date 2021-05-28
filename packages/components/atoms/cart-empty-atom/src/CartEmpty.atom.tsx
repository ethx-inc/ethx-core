import React, { FC } from 'react';
import { NavLink } from '../../nav-link-atom/src';

export interface CartEmptyProps {}

export const CartEmpty: FC<CartEmptyProps> = (): JSX.Element => {
	return (
		<div className='flex flex-col mt-16'>
			<h4 className='font-light text-primary text-3xl text-center'>
				{' '}
				Your basket is empty.
			</h4>
			<h4 className='text-center text-sm text-primary font-light italic mb-6'>
				Thanks for shopping ethically!{' '}
			</h4>
			<NavLink
				label='shop all'
				href='/shop'
				css='text-center font-bold border-2 rounded-full border-primary bg-primary lg:bg-gray-50 w-3/5 lg:w-1/5 py-2 mx-auto mb-3'
			/>
			<NavLink
				label='home'
				href='/'
				css='text-center font-bold border-2 rounded-full border-primary bg-primary lg:bg-gray-50 w-3/5 lg:w-1/5 py-2 mx-auto mb-3'
			/>
			<NavLink
				label='merchant application'
				href='https://forms.gle/PZPe967F9HRHh18u7'
				css='text-center font-bold border-2 rounded-full border-primary bg-primary lg:bg-gray-50 w-3/5 lg:w-1/5 py-2 mx-auto mb-3'
			/>
		</div>
	);
};
