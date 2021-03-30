import React from 'react';

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
		<div className='relative flex flex-col justify-center md:w-40 sm:mr-0 mr-1'>
			<img
				className='absolute z-10 rounded-full md:w-24 w-16 md:top-5 top-0 md:left-8 left-4'
				src={img}
				alt={`profile for ${name}`}
			/>
			<div
				className={`md:mt-20 mt-10 flex flex-col justify-center items-center ${
					bgColor ? `bg-${bgColor}` : 'bg-secondary'
				} md:h-40 h-28 rounded-md ${
					color ? `text-${color}` : 'text-white'
				}`}>
				<h4>{name}</h4>
				<h5>{quote}</h5>
			</div>
		</div>
	);
};