import React from 'react';
import { DownArrow } from '../../down-arrow-atom/src';

export interface MoreFilterProps {
	color?: string;
	fontColor?: string;
	onClick?;
}

export const MoreFilter = ({
	color,
	fontColor,
	onClick,
}: MoreFilterProps): JSX.Element => {

	const sampleData: { text: string; id: number }[] = [];
	for (let index = 0; index < 7; index += 1) {
		sampleData[0] = { text: 'Makeup', id: index[0] };
		sampleData[1] = { text: 'Hair Care', id: index[1] };
		sampleData[2] = { text: 'Skin Care', id: index[2] };
		sampleData[3] = { text: 'Self Care', id: index[3] };
		sampleData[4] = { text: 'Sun Care', id: index[4] };

	}
	return (
		<div
			className={`h-10 text-md overflow-scroll lg:text-lg border-2 text-${fontColor} border-primary flex justify-between rounded-full m-auto px-5 py-1 w-full lg:w-3/5 
			${color ? `bg-${color}` : 'bg-gray-50'}
			${fontColor ? `text-${fontColor}` : 'text-gray-500'} `}
			style={{ fontFamily: 'Roboto' }}>
			<ul className=''>
				{sampleData.map(item => (
					<li key={item.id} 
					className={`text-${fontColor} cursor-pointer`}
					onClick={() => onClick()}>
						{item.text}
					</li>
				))}
			</ul>
		</div>
	);
};
