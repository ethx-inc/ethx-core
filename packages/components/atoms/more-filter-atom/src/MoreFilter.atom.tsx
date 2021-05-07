import React from 'react';
import { DownArrow } from '../../down-arrow-atom/src'



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

	const [showMore, setShowMore] = React.useState(false);
	const toggleClass = () => {
		setShowMore(!showMore);
	}
	const moreOptions = {
		height: 32
	}

	const sampleData: { text: string; id: number }[] = [];
	for (let index = 0; index < 7; index += 1) {
		sampleData[index] = { text: 'more filter options', id: index };
	}
	return (
		<div
			className={`${showMore ? `${moreOptions}` : `` } more-filter h-10 text-sm overflow-scroll lg:text-lg border-2 text-${fontColor} border-primary flex justify-between relative z-0 rounded-full m-auto px-7 py-1 -mb-5 w-5/5 z-40 lg:w-3/5 
			${color ? `bg-${color}` : 'bg-gray-50'}
			${fontColor ? `text-${fontColor}` : 'text-gray-500'} `}
			style={{ fontFamily: 'Roboto' }}>
			<ul className='text-center mb-3 ml-7'>
				{sampleData.map(item => (
					<li key={item.id} className={`text-${fontColor}`}>
						{item.text}
					</li>
				))}
			</ul>
			<div className='hidden'>
			<DownArrow onClick={toggleClass} />
			</div>
		</div>
	);
};
