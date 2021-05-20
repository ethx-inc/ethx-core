import React from 'react';

export interface MoreFilterProps {
	onClick?;
}

export const MoreFilter = ({
	onClick,
}: MoreFilterProps): JSX.Element => {

	const byCategory: string[] = ['Makeup', 'Hair Care', 'Skin Care', 'Sun Care', 'Personal Care', 'Bath', 'Fragrance' ];

	return (
		<div
			className={`h-12 text-md overflow-scroll lg:text-lg border-2 border-primary bg-gray-50 text-gray-500 flex rounded-full m-auto px-5 py-1 w-full lg:w-3/5`}
			style={{ fontFamily: 'Roboto' }}>
			<ul className=''>
				{byCategory.map((category) => (
					<li
					className={`cursor-pointer`}
					onClick={() => onClick()}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};
