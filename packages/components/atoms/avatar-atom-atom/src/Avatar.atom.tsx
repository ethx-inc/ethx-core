import React, { FC } from 'react';

export interface AvatarAtomProps {
	/* Props here */
	img?: string;
	css?: string;
	name: string;
}

export const AvatarAtom: FC<AvatarAtomProps> = ({
	img,
	css,
	name,
}: AvatarAtomProps) => {
	return (
		<img
			className={`rounded-full ${css}`}
			src={img}
			alt={`profile for ${name}`}
		/>
	);
};
