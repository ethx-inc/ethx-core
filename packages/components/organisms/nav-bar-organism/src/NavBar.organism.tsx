import React from 'react';

import { NavButton } from '../../../atoms/nav-button-atom/src/NavButton.atom';
import { NavLink } from '../../../atoms/nav-link-atom/src/NavLink.atom';
import { ShoppingBag } from '../../../atoms/shopping-bag-atom/src/ShoppingBag.atom';
import { Hamburger } from '../../../atoms/hamburger-atom/src/Hamburger.atom';

export interface NavBarProps {
	backgroundColor?: 'black' | 'gray-400';
	color?: 'black' | 'gray-400';
}

export const NavBar = ({
	backgroundColor,
	color,
}: NavBarProps): JSX.Element => {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<div
			className={`lg:px-16 px-4 ${
				backgroundColor ? `bg-${backgroundColor}` : 'bg-primary'
			} 
			${color ? `text-${color}` : 'text-white'} flex-col items-center py-2`}>
			<div className='flex-1 flex justify-between'>
				<NavButton css='hidden lg:flex' label='sign in' />

				<Hamburger onClick={() => setNavbarOpen(!navbarOpen)} />

				<span className='font-semibold text-4xl'>ethx</span>

				<ShoppingBag count={0} />
			</div>

			<div
				className={`lg:flex items-start justify-around ${
					navbarOpen ? 'flex flex-col lg:flex-row' : ' hidden'
				}`}>
				<NavButton css='lg:hidden' label='sign in' />
				<NavLink
					label='shop'
					href='https://web-crunch.com/posts/lets-build-tailwind-css-responsive-navbar'
				/>
				<NavLink
					label='sell'
					href='https://web-crunch.com/posts/lets-build-tailwind-css-responsive-navbar'
				/>
				<NavLink
					label='shop'
					href='https://web-crunch.com/posts/lets-build-tailwind-css-responsive-navbar'
				/>
				<NavLink
					label='sell'
					href='https://web-crunch.com/posts/lets-build-tailwind-css-responsive-navbar'
				/>
			</div>
		</div>
	);
};
