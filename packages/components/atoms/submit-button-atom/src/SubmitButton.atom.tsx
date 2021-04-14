import React from 'react';

export interface SubmitButtonProps {
	title: string;
	bgColor?: 'white' | 'black' | 'gray-50' | 'primary' | 'secondary';
	color?: 'white' | 'black' | 'gray-50' | 'primary' | 'secondary';
	onClick?;
	css?: string;
}

export const SubmitButton = ({
	title,
	bgColor,
	color,
	onClick,
	css,
}: SubmitButtonProps): JSX.Element => {
	return (
		<button
			type='submit'
			className={`font-regular ${
				bgColor ? `bg-${bgColor}` : 'bg-primary'
			} 
				${
					color ? `text-${color}` : 'text-white'
				} lg:text-lg px-4 py-1 rounded-full focus:outline-none ${css}`}
			onClick={() => onClick()}>
			{title}
		</button>
	);
};
