import React from 'react';

import '../../../../../styles/globals.css';

export interface ButtonProps {
	title: string;
	color?: string;
}

export const Button = ({ title, color }: ButtonProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-semibold py-2 px-6 ${
				color ? `bg-[${color}]` : 'bg-yellow-200'
			}  rounded-xl`}>
			{title}
		</button>
	);
};
