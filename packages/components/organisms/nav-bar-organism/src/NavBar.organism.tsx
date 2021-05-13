import React from 'react';

import { NavButton } from '../../../atoms/nav-button-atom/src';
import { NavLink } from '../../../atoms/nav-link-atom/src';
import { ShoppingBag } from '../../../atoms/shopping-bag-atom/src';
import { Hamburger } from '../../../atoms/hamburger-atom/src';
import { UserProfileButton } from '../../../atoms/user-profile-button-atom/src';

export interface NavBarProps {
	backgroundColor?: 'black' | 'gray-400' | 'white' | 'primary';
	color?: 'black' | 'gray-400' | 'primary' | 'white';
	isSignedIn?: boolean;
	onSignOut?;
	onUserProfile?;
	onGoToCart?;
	count?: number;
}

export const NavBar = ({
	backgroundColor,
	color,
	isSignedIn,
	onSignOut,
	onUserProfile,
	onGoToCart,
	count,
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
				{isSignedIn ? (
					<div className='hidden lg:flex'>
						<UserProfileButton onClick={() => onUserProfile()} />
						<NavButton label='sign out' onClick={onSignOut} />
					</div>
				) : (
					<NavLink
						label='sign in'
						href='/signin'
						css='hidden lg:flex'
					/>
				)}

				<Hamburger onClick={() => setNavbarOpen(!navbarOpen)} />

				<NavLink label='ethx' href='/' css='text-4xl' />

				<ShoppingBag count={count} onClick={() => onGoToCart()} />
			</div>

			<div
				className={`lg:flex items-start justify-evenly mt-1 ${
					navbarOpen ? 'flex flex-col lg:flex-row' : ' hidden'
				}`}>
				{isSignedIn ? (
					<div className='lg:hidden'>
						<NavButton
							label='view profile'
							onClick={() => onUserProfile()}
						/>
						<NavButton label='sign out' onClick={onSignOut} />
					</div>
				) : (
					<NavLink label='sign in' href='/signin' css='lg:hidden' />
				)}
				<NavLink label='shop' href='/shop' />
				<NavLink label='sell' href='/home' />
				<NavLink label='shop' href='/shop' />
				<NavLink label='sell' href='/home' />
			</div>
		</div>
	);
};
