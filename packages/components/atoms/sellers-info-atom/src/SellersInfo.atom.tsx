import React from 'react';

export interface SellersInfoProps {
	shopOwner?: string;
	memberSince?: string;
	totalOrders?: string;
}

export const SellersInfo = ({
	shopOwner,
	memberSince,
	totalOrders,
}: SellersInfoProps): JSX.Element => {
	return (
		<div className='border-t border-primary w-5/6 my-5 mx-auto px-5 lg:mx-0 lg:mt-10'>
			<div>
				<p className='text-lg italic font-medium my-4'>Shop Info</p>
				<p className='text-md'>Shop Owner: {shopOwner}</p>
				<p className='text-md'>Member Since: {memberSince} </p>
				<p className='text-md'>Total Orders: {totalOrders} </p>
			</div>

			<div className='mt-5'>
				<a href='/user-profile'>
					<p className='text-sm italic underline'>Change Email</p>
				</a>
				<a href='/user-profile'>
					<p className='text-sm italic underline'>Change Password</p>
				</a>
			</div>
		</div>
	);
};
