import React from 'react';

export interface ItemCardProps {
	name: string;
	price?: string;
	img?: string;
	color?: 'white' | 'black' | 'grey-400';
	css?: string;
}

export const ItemCard = ({ name, price, img }: ItemCardProps): JSX.Element => {
	return (
		<div className='cursor-pointer'>
			<img className='w-full' src={img} alt={`Card for ${name}`} />

			<div className='flex justify-between text-md mt-3 mb-5 font-bold'>
				<div>{name}</div>
				<div>{price}</div>
			</div>
		</div>
	);
};
