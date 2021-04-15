import React from 'react';

export interface PDPImageProps {
	color?: string;
}

export const PDPImage = ({
	color,
}: PDPImageProps): JSX.Element => {
	return (
		<div
			className={`bg-${color}`}>
			<img
				src='/images/flipped-hero-image.jpg'
				alt='flipped-hero'
				width={400}
				height={200}
				className='rounded-lg'
			/>
		</div>
	);
};
