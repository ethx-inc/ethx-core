import React from 'react';

import Link from 'next/link';

export interface NavLinkProps {
	label: string;
	href: string;
	color?: 'black' | 'gray-400' | 'white' | 'gray-500';
	css?;
}

export const NavLink = ({
	label,
	href,
	color,
	css,
}: NavLinkProps): JSX.Element => {
	return (
		<Link href={href}>
			{/* eslint-disable-next-line */}
			<a
				className={`font-regular ${
					color ? `text-${color}` : 'text-white'
				} lg:text-primary ${css} px-4`}>
				{label}
			</a>
		</Link>
	);
};
