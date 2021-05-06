import React from 'react';
import { RestartSign } from '../../restart-sign-atom/src'

export interface ButtonArrowProps {
	title?: string;
	color?: string;
	fontColor?: string;
	onClick?;
}

export const ButtonArrow = ({
	title,
	color,
	fontColor,
	onClick,
}: ButtonArrowProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-regular m-auto w-28 flex justify-between py-1 px-3 border-2 border-primary ${
				color ? `bg-${color}` : 'bg-primary'
			}  ${fontColor ? `text-${fontColor}` : 'text-white'} rounded-full`}
			style={{ fontFamily: 'Roboto' }}
			onClick={() => onClick()}>
			{title}
			<RestartSign />
		</button>
	);
};
