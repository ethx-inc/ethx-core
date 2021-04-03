import React from 'react';

import { IconImage } from '../../../atoms/icon-image/src/IconImage.atom';
import { IconTitle } from '../../../atoms/icon-title/src/IconTitle.atom';

export interface IconWrapperProps {
	borderColor?: string;
	fontColor?: string;
	title?: string;
}

export const IconWrapper = ({
	borderColor,
	fontColor,
	title,
}: IconWrapperProps): JSX.Element => {

	return (

		<div className={`grid justify-items-stretch w-40 h-40`}>
			<div className={`justify-self-center`}>
				<IconImage borderColor={borderColor} />
				<IconTitle title={title} fontColor={fontColor}/>
			</div>
		</div>
	);
};
