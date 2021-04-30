import React from 'react';

export interface SellersBannerProps {
	brandName?: string;
}

export const SellersBanner = ({
	brandName,
}: SellersBannerProps): JSX.Element => {
	return (
		<div className='w-5/6 lg:w-4/5 h-44 mb-10'>
			<img
				src='/images/flipped-hero-image.jpg'
				alt='placeholder-img'
				className='w-full max-h-full object-cover mb-10'
			/>
		</div>
	);
};
