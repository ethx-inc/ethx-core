import React from 'react';

import '../../../../../styles/globals.css';

import Link from 'next/link';

export interface NavLinkProps {
	label: string;
	href: string;
	color?: 'black' | 'gray-400' | 'white';
}

export const NavLink = ({ label, href, color }: NavLinkProps): JSX.Element => {
	return (
		<Link href={href}>
			{/* eslint-disable-next-line */}
			<a className={`font-semibold ${color ? `text-${color}` : ''}`}>
				{label}
			</a>
		</Link>
	);
};
