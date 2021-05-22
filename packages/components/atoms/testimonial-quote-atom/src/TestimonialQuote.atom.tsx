import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft';
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight';
import React, { FC } from 'react';

export interface TestimonialQuoteProps {
	/* Props here */
	name: string;
	quote: string;
	id?: number;
	color?: 'white' | 'black' | 'gray-500';
	nameColor?: 'white' | 'black' | 'gray-400';
	quoteColor?: 'primary';
	bgColor?: 'white' | 'black' | 'gray-50' | 'primary' | 'secondary';
}

export const TestimonialQuote: FC<TestimonialQuoteProps> = ({
	name,
	quote,
	color = 'gray-500',
	nameColor = 'gray-400',
	quoteColor = 'primary',
	bgColor,
}: TestimonialQuoteProps) => {
	return (
		<div
			className={`relative flex flex-col justify-center 
          md:w-52 lg:w-96 mx-auto md:mb-2 
            mb-1 items-center py-1 px-3 ${bgColor ? `bg-${bgColor}` : ''}`}>
			<span className={`text-${quoteColor} text-xl self-start font-serif`}>
				<ImQuotesLeft />
			</span>
			<div
				className={`${
					color ? `text-${color}` : ''
				} font-semibold text-center px-6`}>
				{quote}
			</div>
			<span className={`text-${quoteColor} text-xl self-end font-serif`}>
				<ImQuotesRight />
			</span>
			<span className={`${nameColor ? `text-${nameColor}` : ''} text-sm`}>
				{name}
			</span>
		</div>
	);
};
