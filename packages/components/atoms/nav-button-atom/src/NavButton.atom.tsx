import React from 'react';

export interface NavButtonProps {
	label?: string;
	color?: 'black' | 'gray-400' | 'white';
	bgColor?: 'white' | 'black' | 'gray-50' | 'primary' | 'secondary';
	css?: string;
	onClick?;
	children?;
}

// export const NavButton = ({ label, color, class }: NavButtonProps): JSX.Element
export const NavButton = ({
	label,
	color,
	bgColor,
	css,
	onClick,
	children,
}: NavButtonProps): JSX.Element => {
	return (
		<button
			onClick={() => onClick()}
			type='button'
			className={`font-regular ${css} focus:outline-none ${
				color ? `text-${color}` : 'text-primary'
			} ${
				bgColor ? `bg-${bgColor}` : ''
			} lg:text-lg px-4 py-1 rounded-full flex`}>
			{children}
			{label}
		</button>
	);
};
