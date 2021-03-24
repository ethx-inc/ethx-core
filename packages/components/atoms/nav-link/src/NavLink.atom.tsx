import React from 'react';

import '../../../../../styles/globals.css';

import Link from 'next/link';

export interface NavLinkProps {
	label: string;
	href: string;
	color?: 'white' | 'gray-400';
}

export const NavLink = ({ label, href, color }: NavLinkProps): JSX.Element => {
	return (
		<Link href={href}>
			{/* eslint-disable-next-line */}
			<a className={color ? `text-${color}` : 'text-black'}>{label}</a>
		</Link>
	);
};
