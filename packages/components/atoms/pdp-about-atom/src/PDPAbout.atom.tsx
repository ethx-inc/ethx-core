import React from 'react';

export interface PDPAboutProps {
	fontColor?: string;
	brandDetails?: string;
}

export const PDPAbout = ({
	fontColor,
	brandDetails,
}: PDPAboutProps): JSX.Element => {
	return (
		<div
			className={`text-${fontColor} border-t border-primary lg:w-4/5 my-5 mx-5 lg:mx-0 lg:my-10`}>
			<h3 className='text-lg italic font-light my-4'>About The Brand</h3>
			<p className='text-md'>{brandDetails}</p>
		</div>
	);
};
