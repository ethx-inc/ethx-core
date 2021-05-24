import React, { FC } from 'react';
import { NavLink } from '../../nav-link-atom/src'

export interface CartEmptyProps {

}

export const CartEmpty: FC<CartEmptyProps> = ({

}: CartEmptyProps): JSX.Element => {
	return (
		<div className='flex flex-col mt-16'>
			<h4 className='font-light text-primary text-3xl text-center'> Your basket is empty.</h4>
			<h4 className='text-center text-sm text-primary font-light italic mb-6'>Thanks for shopping ethically! </h4>
			<NavLink label='shop all' href='/shop' css={'text-center font-bold border-2 rounded-full border-primary bg-gray-50 w-1/5 py-2 mx-auto mb-3'}/>
			<NavLink label='merchant application' href='https://docs.google.com/forms/d/1sM0MjJd8VO83919ObcpMGZHc2_YGT55zCNvAq-mkws0/edit?usp=drive_web' css={'text-center font-bold border-2 rounded-full border-primary bg-gray-50 w-1/5 py-2 mx-auto mb-3'}/>
			<NavLink label='home' href='/' css={'text-center font-bold border-2 rounded-full border-primary bg-gray-50 w-1/5 py-2 mx-auto mb-4'}/>
		</div>
	);
};