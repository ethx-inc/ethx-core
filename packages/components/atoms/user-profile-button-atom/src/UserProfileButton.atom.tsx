import React, { FC } from 'react';
import { FaUser } from '@react-icons/all-files/fa/FaUser';

export interface UserProfileButtonProps {
	/* Props here */
	css?: string;
	color?: 'black' | 'gray-400' | 'white' | 'primary';
	onClick?;
}

export const UserProfileButton: FC<UserProfileButtonProps> = ({
	css,
	color,
	onClick,
}: UserProfileButtonProps) => {
	return (
		<button
			className={`cursor-pointer text-4xl block focus:outline-none mx-0 ${css} ${
				color ? `text-${color}` : 'text-primary'
			}`}
			type='button'
			onClick={() => onClick()}>
			<FaUser />
		</button>
	);
};
