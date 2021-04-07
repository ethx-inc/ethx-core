import React from 'react';

import { IconImage } from '../../../atoms/icon-image/src/IconImage.atom';
import { IconTitle } from '../../../atoms/icon-title/src/IconTitle.atom';

export interface IconWrapperProps {
	borderColor?: string;
	color?: string;
	fontColor?: string;
	title?: string;
}

export const IconWrapper = ({
	borderColor,
	color,
	fontColor,
	title,
}: IconWrapperProps): JSX.Element => {
	return (
		<div className='flex flex-col ml-12 lg:ml-0 lg:flex-row mt-5'>
			<div className='grid justify-items-stretch w-40 h-40'>
				<div className='justify-self-center'>
					<IconImage borderColor={borderColor} color={color} />
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>

			<div className='grid justify-items-stretch w-40 h-40'>
				<div className='justify-self-center'>
					<IconImage borderColor={borderColor} color={color} />
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>

			<div className='grid justify-items-stretch w-40 h-40'>
				<div className='justify-self-center'>
					<IconImage borderColor={borderColor} color={color} />
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>

			<div className='grid justify-items-stretch w-40 h-40'>
				<div className='justify-self-center'>
					<IconImage borderColor={borderColor} color={color} />
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>

			<div className='grid justify-items-stretch w-40 h-40'>
				<div className='justify-self-center'>
					<IconImage borderColor={borderColor} color={color} />
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>
		</div>
	);
};
