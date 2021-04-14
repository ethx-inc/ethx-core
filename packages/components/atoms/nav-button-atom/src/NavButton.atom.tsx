import React from 'react';

export interface NavButtonProps {
	label: string;
	color?: 'black' | 'gray-400' | 'white';
	css?: string;
	onClick?;
}

// export const NavButton = ({ label, color, class }: NavButtonProps): JSX.Element
export const NavButton = ({
	label,
	color,
	css,
	onClick,
}: NavButtonProps): JSX.Element => {
	return (
		<button
			onClick={() => onClick()}
			type='button'
			className={`font-regular ${css} focus:outline-none ${
				color ? `text-${color}` : 'primary'
			}`}>
			{label}
		</button>
	);
};
