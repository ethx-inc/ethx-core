import React, { useState } from 'react';

export interface PDPImageProps {
	color?: string;
	pdpImages?: string[];
	productName;
}

export const PDPImage = ({
	color,
	pdpImages,
	productName,
}: PDPImageProps): JSX.Element => {
	const [mainImage, setMainImage] = useState(() => {
		return pdpImages ? pdpImages[0] : null;
	});

	return (
		<div className={`bg-${color} flex flex-row m-auto lg:m-0`}>
			<div className='hidden lg:flex flex-col overflow-auto h-4/5 mr-3'>
				{pdpImages
					? pdpImages.map(img => {
							return (
								<button
									type='button'
									onClick={() => setMainImage(img)}
									className='focus:outline-none'
									key={img}>
									<img
										src={img}
										alt='flipped-hero'
										className='rounded-lg mb-3 h-20 w-20 object-scale-down'
									/>
								</button>
							);
					  })
					: null}
			</div>

			<div className={`bg-${color}`}>
				<img
					src={mainImage}
					alt={productName}
					className='lg:rounded-lg w-80 h-80 object-cover'
				/>
			</div>
		</div>
	);
};
