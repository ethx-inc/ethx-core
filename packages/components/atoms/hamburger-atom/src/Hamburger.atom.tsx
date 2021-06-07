import React from 'react';

export interface HamburgerProps {
	onClick?;
	color?: 'black' | 'gray-400' | 'white' | 'primary';
}

// export const NavButton = ({ label, color, class }: NavButtonProps): JSX.Element
export const Hamburger = ({ color, onClick }: HamburgerProps): JSX.Element => {
	return (
		<button
			className={`cursor-pointer text-4xl block lg:hidden focus:outline-none mx-0 ${
				color ? `text-${color}` : 'primary'
			}`}
			type='button'
			onClick={() => onClick()}>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  				<path stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	);
};
