import React from 'react';

export interface ItemCardProps {
	brandName?: string;
	productName: string;
	productPrice?: string;
	productImg?: string;
	onClick?;
}

export const ItemCard = ({
	brandName,
	productName,
	productPrice,
	productImg,
	onClick,
}: ItemCardProps): JSX.Element => {
	return (
		<button
			className='focus:outline-none'
			type='button'
			onClick={() => onClick()}>
			<img
				className='w-20 max-h-52 mx-auto'
				src={productImg}
				alt={`Card for ${productName}`}
			/>

			<div className='flex flex-col text-sm text-center mt-2'>
				<div className='font-bold text-xs'>{brandName}</div>
				<div>{productName}</div>
				<div className='font-bold'>${productPrice}</div>
			</div>
		</button>
	);
};
