import React from 'react';

import '../../../../../styles/globals.css';

export interface NavButtonProps {
	label: string;
	color?: 'black' | 'gray-400' | 'white';
	css?: string;
}

// export const NavButton = ({ label, color, class }: NavButtonProps): JSX.Element
export const NavButton = ({
	label,
	color,
	css,
}: NavButtonProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-semibold ${css} focus:outline-none ${
				color ? `text-${color}` : ''
			}`}>
			{label}
		</button>
	);
};
