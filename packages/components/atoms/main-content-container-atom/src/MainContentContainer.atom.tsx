import React, { FC } from 'react';

export interface MainContentContainerProps {
	/* Props here */
	css?: string;
	children?: React.ReactNode;
}

export const MainContentContainer: FC = ({
	children,
	css,
}: MainContentContainerProps) => {
	return <div className={`max-w-7xl mx-auto ${css}`}>{children}</div>;
};
