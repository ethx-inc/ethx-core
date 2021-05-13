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
		<div className='flex flex-row justify-center overflow-auto my-5'>
			<div className='grid justify-items-stretch w-40 h-40 mx-5'>
				<div className='justify-self-center my-auto'>
					<IconImage
						iconImage='/images/black-owned-icon.png'
						borderColor={borderColor}
						color={color}
					/>
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>

			<div className='grid justify-items-stretch w-40 h-40 mx-5'>
				<div className='justify-self-center my-auto'>
					<IconImage
						iconImage='/images/black-owned-icon.png'
						borderColor={borderColor}
						color={color}
					/>
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>

			<div className='grid justify-items-stretch w-40 h-40 mx-5'>
				<div className='justify-self-center my-auto'>
					<IconImage
						iconImage='/images/black-owned-icon.png'
						borderColor={borderColor}
						color={color}
					/>
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>

			<div className='grid justify-items-stretch w-40 h-40 mx-5'>
				<div className='justify-self-center my-auto'>
					<IconImage
						iconImage='/images/black-owned-icon.png'
						borderColor={borderColor}
						color={color}
					/>
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>

			<div className='grid justify-items-stretch w-40 h-40 mx-5'>
				<div className='justify-self-center my-auto'>
					<IconImage
						iconImage='/images/black-owned-icon.png'
						borderColor={borderColor}
						color={color}
					/>
					<IconTitle title={title} fontColor={fontColor} />
				</div>
			</div>
		</div>
	);
};
