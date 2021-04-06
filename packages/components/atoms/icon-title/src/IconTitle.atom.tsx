import React from 'react';

export interface IconTitleProps {
	fontColor?: string;
	title?: string;
}

export const IconTitle = ({ fontColor, title }: IconTitleProps): JSX.Element => {
	return (
		<div className={`mt-2 text-center`}>
			<h4 className={`font-bold text-xs
			${fontColor ? `text-${fontColor}` : 'text-primary'}
			`}>{title}</h4>
		</div>
	);
};
