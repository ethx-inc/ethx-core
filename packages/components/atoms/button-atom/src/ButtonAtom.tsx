import React from 'react';

import '../../../../../styles/globals.css';

export interface ButtonProps {
	title: string;
}

export const Button = ({ title }: ButtonProps): JSX.Element => {
	return (
		<button
			type='button'
			className='w-fill ring rounded-md shadow-2xl bg-black'>
			{title}
		</button>
	);
};
