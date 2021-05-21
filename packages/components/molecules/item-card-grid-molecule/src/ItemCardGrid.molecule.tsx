import React from 'react';

export interface ItemCardGridProps {
	children?;
}

export const ItemCardGrid = ({ children }: ItemCardGridProps): JSX.Element => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 lg:gap-x-32 gap-y-10'>
			{children}
		</div>
	);
};
