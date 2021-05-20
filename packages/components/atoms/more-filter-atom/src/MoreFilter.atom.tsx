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
			{/* 
			TODO: ul > li is not suppose to have an onClick on it we need to find a 
			way to get the same functionality from use select > option
			*/}
			<ul className=''>
				{byCategory.map(category => (
					// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
					<li
						key={category}
						className={`text-${fontColor} cursor-pointer`}
						onClick={() => onClick()}
						onKeyPress={() => onClick()}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};
