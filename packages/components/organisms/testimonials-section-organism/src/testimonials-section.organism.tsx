import React, { FC } from 'react';

export interface TestimonialsSectionProps {
	/* Props here */
	stackView?: boolean;
	bgColor?:
		| 'white'
		| 'black'
		| 'gray-400'
		| 'primary'
		| 'secondary'
		| 'offWhite';
	children?: React.ReactNode;
}

export const TestimonialsSection: FC<TestimonialsSectionProps> = ({
	stackView = false,
	bgColor,
	children,
}: TestimonialsSectionProps) => {
	return (
		<div
			className={`flex flex-col items-center ${
				bgColor ? `bg-${bgColor}` : 'bg-offWhite'
			}`}>
			<div
				className={`flex ${
					stackView ? 'flex-col items-center' : ''
				} md:justify-around justify-between w-full overflow-auto md:py-8 py-4`}>
				{children}
			</div>
		</div>
	);
};
