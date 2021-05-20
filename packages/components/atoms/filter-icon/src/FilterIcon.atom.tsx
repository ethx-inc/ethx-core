import React from 'react';

export interface FilterIconProps {
	imgSource?: string;
	onClick?;
	title?: string;
}

export const FilterIcon = ({
	imgSource,
	onClick,
	title,
}: FilterIconProps): JSX.Element => {
	const [selectedIcon, setSelectedIcon] = React.useState(false);

	return (
		<div>
			<button
				type='button'
				id='icon-image'
				className={`rounded-full border-2 bg-gray-50 w-24 h-24 m-auto focus:outline-none
				${selectedIcon ? 'border-4 border-gray-500' : 'border-2 border-primary'}`}
				onClick={() => setSelectedIcon(!selectedIcon)}>
				<img
					src={imgSource}
					alt='filter-icon'
					width={92}
					height={80}
					className='m-auto'
				/>
			</button>
			<div className='mt-2 text-center'>
				<h4
					className={`font-bold text-xs break-normal
					${selectedIcon ? 'text-gray-500' : 'text-primary'}`}>
					{title}
				</h4>
			</div>
		</div>
	);
};
