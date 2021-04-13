import React from 'react';

import { NavButton } from '../../../atoms/nav-button-atom/src';
import { NavLink } from '../../../atoms/nav-link-atom/src';
import { ShoppingBag } from '../../../atoms/shopping-bag-atom/src';
import { Hamburger } from '../../../atoms/hamburger-atom/src';

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
			className={`${
				backgroundColor ? `bg-${backgroundColor}` : 'bg-white'
			} 
			${
				color ? `text-${color}` : 'text-primary'
			} border-b border-t flex-col items-center pt-2 lg:py-2`}>
			<div className='flex-1 flex justify-around border-b items-center pb-3'>
				<NavLink label='sign in' href='/signin' css='hidden lg:flex' />

				<Hamburger onClick={() => setNavbarOpen(!navbarOpen)} />

				<span className='font-regular text-4xl'>ethx</span>

				<ShoppingBag count={0} />
			</div>

			<div
				className={`lg:flex items-start justify-evenly mt-1 ${
					navbarOpen ? 'flex flex-col lg:flex-row' : ' hidden'
				}`}>
				<NavLink label='sign in' href='/signin' css='lg:hidden' />
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
