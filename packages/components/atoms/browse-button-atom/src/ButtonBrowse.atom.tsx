import React from 'react';

export interface ButtonBrowseProps {
	fontColor?: string;
	title?: string;
	onClick?;
}

export const ButtonBrowse = ({
	fontColor,
	onClick,
	title,
}: ButtonBrowseProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-regular lowercase w-44 h-32 m-8 border-2 border-transparent hover:border-primary bg-gray-200 rounded-lg ${
				fontColor ? `text-${fontColor}` : 'text-gray-500'
			}`}
			style={{ fontFamily: 'Roboto' }}
			onClick={() => onClick()}>
			{title}
		</button>
	);
};
