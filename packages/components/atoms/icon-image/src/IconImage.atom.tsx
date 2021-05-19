import React from 'react';

export interface IconImageProps {
	borderColor?: string;
	color?: string;
	iconImage?: string;
}

export const IconImage = ({
	borderColor,
	color,
	iconImage,
}: IconImageProps): JSX.Element => {
	return (
		<div
			className={`rounded-full border-2 border-${borderColor} bg-${color} w-24 h-24 m-auto`}>
			<img
				src={iconImage}
				alt='filter-icon'
				width={92}
				height={80}
				className='m-auto'
			/>
		</div>
	);
};
