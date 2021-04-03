import React from 'react';

export interface IconImageProps {

	borderColor?: string;
}

export const IconImage = ({ borderColor }: IconImageProps): JSX.Element => {

	return (
		<div className={`rounded-full border-2 border-${borderColor} w-24 h-24`}>
			{/* <img src='/public/rice-icon.png' alt='rice-icon-png' width={24} height={24}/> */}
		</div>
	);
};
