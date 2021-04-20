import React from 'react';

export interface ItemCardGridProps {
	children?;
	css?: string;
}

export const ItemCardGrid = ({
	children,
	css,
}: ItemCardGridProps): JSX.Element => {
	return (
		<div
			className={`${css} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3`}>
			{children}
		</div>
	);
};
