import React from 'react';

export interface SellersInfoProps {
	shopOwner?: string;
	memberSince?: string;
	totalSales?: string;
	totalOrders?: string;
}

export const SellersInfo = ({
	shopOwner,
	memberSince,
	totalSales,
	totalOrders
}: SellersInfoProps): JSX.Element => {
	return (
		<div
			className='border-t border-primary w-5/6 lg:w-4/5 my-5 mx-auto lg:mx-0 lg:mt-10'>
			<div>
				<p className='text-lg italic font-medium my-4'>Shop Info</p>
				<p className='text-md'>Shop Owner: {shopOwner}</p>
				<p className='text-md'>Member Since: {memberSince} </p>
				<p className='text-md'>Total Sales: {totalSales} </p>
				<p className='text-md'>Total Orders: {totalOrders} </p>
			</div>

			<div
				className='mt-5'>
				<a href='#'><p className='text-sm italic underline'>Change Email</p></a>
				<a href='#'><p className='text-sm italic underline'>Change Password</p></a>

			</div>
			
			
		</div>
	);
};
