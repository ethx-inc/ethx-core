import React from 'react';

export interface ButtonProps {
	title: string;
	bgColor?: 'white' | 'black' | 'gray-50' | 'primary' | 'secondary';
	color?: 'white' | 'black' | 'gray-50' | 'primary' | 'secondary';
	onClick?;
	css?: string;
}

export const Button = ({
	title,
	bgColor,
	color,
	onClick,
	css,
}: ButtonProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-regular ${bgColor ? `bg-${bgColor}` : 'bg-primary'} 
				${
					color ? `text-${color}` : 'text-white'
				} lg:text-lg px-4 py-1 rounded-full focus:outline-none ${css}`}
			onClick={() => onClick()}>
			{title}
		</button>
	);
};
