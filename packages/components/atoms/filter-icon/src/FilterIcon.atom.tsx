import React from 'react';

export interface FilterIconProps {
	isActive?: boolean;
	imgSource?: string;
	onClick?
	title?: string;
}

export const FilterIcon = ({
	isActive,
	imgSource,
	onClick,
	title,
}: FilterIconProps): JSX.Element => {

	
	return (
		<div>
			<div
				id={'icon-image'}
				className={`rounded-full border-2 bg-gray-50 w-24 h-24 m-auto
				${isActive ? 'border-4 border-gray-500' : 'border-2 border-primary'}
				`}
				onClick={() => onClick(title)}>
				<img
					src={imgSource}
					alt='filter-icon'
					width={92}
					height={80}
					className='m-auto'
				/>
			</div>
			<div className='mt-2 text-center'>
				<h4
					className={`font-bold text-xs break-normal
					${isActive ? 'text-gray-500' : 'text-primary'}`}>
					{title}
				</h4>
			</div>

		</div>
	);
};
