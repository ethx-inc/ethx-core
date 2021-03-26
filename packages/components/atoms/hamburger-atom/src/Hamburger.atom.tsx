import React from 'react';

import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';

export interface HamburgerProps {
	onClick?;
	color?: 'black' | 'gray-400' | 'white';
}

// export const NavButton = ({ label, color, class }: NavButtonProps): JSX.Element
export const Hamburger = ({ color, onClick }: HamburgerProps): JSX.Element => {
	return (
		<button
			className={`cursor-pointer text-4xl block lg:hidden focus:outline-none mx-0 ${
				color ? `text-${color}` : ''
			}`}
			type='button'
			onClick={() => onClick()}>
			<GiHamburgerMenu />
		</button>
	);
};
