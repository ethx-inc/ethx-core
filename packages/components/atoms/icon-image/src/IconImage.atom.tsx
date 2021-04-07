import React from 'react';

export interface IconImageProps {
	borderColor?: string;
	color?: string;
}

export const IconImage = ({
	borderColor,
	color,
}: IconImageProps): JSX.Element => {
	return (
		<div
			className={`rounded-full border-2 border-${borderColor} bg-${color} w-24 h-24`}>
			<img
				src='/images/black-owned-icon.png'
				alt='black-owned'
				width={60}
				height={60}
				className='m-auto pt-3'
			/>
		</div>
	);
};
