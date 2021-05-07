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
			className={`${showMore ? `${moreOptions}` : `` } h-10 text-md overflow-scroll lg:text-lg border-2 text-${fontColor} border-primary flex justify-between rounded-full m-auto px-5 py-1 w-full lg:w-3/5 
			${color ? `bg-${color}` : 'bg-gray-50'}
			${fontColor ? `text-${fontColor}` : 'text-gray-500'} `}
			style={{ fontFamily: 'Roboto' }}>
			<ul className=''>
				{sampleData.map(item => (
					<li key={item.id} className={`text-${fontColor}`}>
						{item.text}
					</li>
				))}
			</ul>
			<div className=''>
			<DownArrow onClick={toggleClass} />
			</div>
		</div>
	);
};
