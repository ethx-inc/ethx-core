import React from 'react';

import '../../../../../styles/globals.css';

export interface IconTitleProps {
	title: string;
}

export const IconTitle = ({ title }: IconTitleProps): JSX.Element => {
	return (
		<div className='text-center'>
			<h4 className='font-regular text-sm text-gray-400'>{title}</h4>
		</div>
	);
};
