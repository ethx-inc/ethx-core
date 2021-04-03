import React from 'react';

import '../../../../../styles/globals.css';

export interface IconImageProps {
	// iconUrl: string;
	borderColor?: string;
}

export const IconImage = ({ borderColor }: IconImageProps): JSX.Element => {
	return (
		<div className={`rounded-full border-2 border-${borderColor} w-24 h-24`}>
			{/* <img src={`${iconUrl}`} alt='rice-icon-png' width={24} height={24}/> */}
		</div>
	);
};
