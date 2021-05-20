import React from 'react';
import { DownArrow } from '../../down-arrow-atom/src';

export interface MoreFilterProps {
	color?: string;
	fontColor?: string;
	onClick?;
}

export const MoreFilter = ({
	color,
	fontColor,
	onClick,
}: MoreFilterProps): JSX.Element => {
	const byCategory: string[] = [
		'Makeup',
		'Hair Care',
		'Skin Care',
		'Sun Care',
		'Personal Care',
		'Bath',
		'Fragrance',
	];

	return (
		<div
			className={`h-10 text-md overflow-scroll lg:text-lg border-2 text-${fontColor} border-primary flex justify-between rounded-full m-auto px-5 py-1 w-full lg:w-3/5 
			${color ? `bg-${color}` : 'bg-gray-50'}
			${fontColor ? `text-${fontColor}` : 'text-gray-500'} `}
			style={{ fontFamily: 'Roboto' }}>
			<div className='flex flex-col w-full'>
				{byCategory.map(category => (
					<button
						type='button'
						key={category}
						className={`text-${fontColor} text-xl cursor-pointer`}
						onClick={() => onClick()}>
						{category}
					</button>
				))}
			</div>
		</div>
	);
};
