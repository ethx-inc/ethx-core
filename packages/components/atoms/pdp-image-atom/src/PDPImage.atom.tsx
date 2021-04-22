import React from 'react';

export interface PDPImageProps {
	color?: string;
}

export const PDPImage = ({ color }: PDPImageProps): JSX.Element => {
	return (
		<div className={`bg-${color} flex flex-row`}>
			<div className='hidden lg:flex flex-col overflow-auto h-4/5 mr-3'>
				<img
					src='/images/flipped-hero-image.jpg'
					alt='flipped-hero'
					width={100}
					height={100}
					className='rounded-lg mb-3'
				/>
				<img
					src='/images/flipped-hero-image.jpg'
					alt='flipped-hero'
					width={100}
					height={100}
					className='rounded-lg mb-3'
				/>
				<img
					src='/images/flipped-hero-image.jpg'
					alt='flipped-hero'
					width={100}
					height={100}
					className='rounded-lg mb-3'
				/>
				<img
					src='/images/flipped-hero-image.jpg'
					alt='flipped-hero'
					width={100}
					height={100}
					className='rounded-lg mb-3'
				/>
			</div>

			<div className={`bg-${color}`}>
				<img
					src='/images/flipped-hero-image.jpg'
					alt='flipped-hero'
					width={400}
					height={200}
					className='lg:rounded-lg'
				/>
			</div>
		</div>
	);
};
