import React from 'react';

export interface ItemCardProps {
	brandName?: string;
	productName: string;
	productPrice?: string;
	productImg?: string;
}

export const ItemCard = ({
	brandName,
	productName,
	productPrice,
	productImg,
}: ItemCardProps): JSX.Element => {
	return (
		<div className='cursor-pointer'>
			<img
				className='w-auto max-h-52 h-52 mx-auto'
				src={productImg}
				alt={`Card for ${productName}`}
			/>

			<div className='flex flex-col text-md text-center mt-2'>
				<div className='font-bold'>{brandName}</div>
				<div>{productName}</div>
				<div className='font-bold'>{productPrice}</div>
			</div>
		</div>
	);
};
