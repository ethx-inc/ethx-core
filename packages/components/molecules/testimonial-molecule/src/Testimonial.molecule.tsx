import React from 'react';

import { AvatarAtom } from '../../../atoms/avatar-atom-atom/src';
import { TestimonialCardAtom } from '../../../atoms/testimonial-card-atom/src';

export interface TestimonialProps {
	name: string;
	quote: string;
	img?: string;
	id?: number;
	color?: 'white' | 'black' | 'gray-400';
	bgColor?: 'white' | 'black' | 'gray-400' | 'primary' | 'secondary';
}

export const Testimonial = ({
	name,
	quote,
	img,
	color,
	bgColor,
}: TestimonialProps): JSX.Element => {
	return (
		<div className='relative flex flex-col justify-center md:w-40 w-28  sm:mr-0 mr-2 md:min-w-10r min-w-7r md:mb-2 mb-1'>
			<AvatarAtom
				css='absolute z-10 md:w-24 w-16 md:top-2 top-1 md:left-8 left-6'
				name={name}
				img={img}
			/>
			<TestimonialCardAtom
				name={name}
				quote={quote}
				color={color}
				bgColor={bgColor}
			/>
		</div>
	);
};
