import React from 'react';

export interface ButtonBrowseProps {
	title?: string;
	fontColor?: string;
}

export const ButtonBrowse = ({
	title,
	fontColor,
}: ButtonBrowseProps): JSX.Element => {
	return (
		<button
			type='button'
			className={`font-regular lowercase w-40 h-40 m-8 border-2 border-transparent hover:border-primary bg-gray-50 rounded-lg ${fontColor ? `text-${fontColor}` : 'text-gray-500'}`}
			style={{ fontFamily: 'Roboto' }}>
			{title}
		</button>
	);
};
