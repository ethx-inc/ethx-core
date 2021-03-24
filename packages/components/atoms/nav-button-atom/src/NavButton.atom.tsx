import React from 'react';

import '../../../../../styles/globals.css';

export interface NavButtonProps {
	label: string;
	color?: 'black' | 'gray-400';
}

export const NavButton = ({ label, color }: NavButtonProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-semibold ${
				color ? `text-${color}` : 'text-white'
			}`}>
			{label}
		</button>
	);
};
