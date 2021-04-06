import React, { FC } from 'react';

export interface TestimonialCardAtomProps {
	/* Props here */
	name: string;
	quote: string;
	color?: 'white' | 'black' | 'gray-400';
	bgColor?: 'white' | 'black' | 'gray-400' | 'primary' | 'secondary';
	css?: string;
}

export const TestimonialCardAtom: FC<TestimonialCardAtomProps> = ({
	name,
	quote,
	color,
	bgColor,
	css,
}: TestimonialCardAtomProps) => {
	return (
		<div
			className={`md:mt-16 mt-10 flex flex-col justify-center items-center ${
				bgColor ? `bg-${bgColor}` : 'bg-secondary'
			} md:h-40 h-28 rounded-md ${
				color ? `text-${color}` : 'text-white'
			} ${css}`}>
			<h4 className='text-lg'>{name}</h4>
			<h5>{quote}</h5>
		</div>
	);
};
