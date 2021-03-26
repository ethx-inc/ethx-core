import React from 'react';

export interface ButtonProps {
	title: string;
	color?: string;
}

export const Button = ({ title, color }: ButtonProps): JSX.Element => {
	return (
		<button
			type='button'
			className='font-semibold bg-yellow-300 px-8 py-3 rounded-lg focus:outline-none'
			style={{ fontFamily: 'Roboto' }}>
			{title}
		</button>
	);
};
