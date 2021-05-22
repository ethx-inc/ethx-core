import React from 'react';

export interface CategoryListProps {
	isActive?;
	handleClick?;
}

export const CategoryList = ({ isActive, handleClick }: CategoryListProps): JSX.Element => {
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
			className={'h-12 text-md overflow-scroll lg:text-lg border-2 border-primary bg-gray-50 flex rounded-full m-auto px-5 py-1 w-full lg:w-3/5'}
			style={{ fontFamily: 'Roboto' }}>
			<div className='flex flex-col w-full'>
				{byCategory.map(category => (
					// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
					<div
          			key={category}
					className={`cursor-pointer px-5
					${isActive === category ? 'text-black' : 'text-gray-500' }`}
					onClick={() => handleClick(category)}
          			>
						{category}
					</div>
				))}
			</div>
		</div>
	);
};
