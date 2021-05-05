import React from 'react';

export interface PDPAboutProps {
	fontColor?: string;
	brandDetails?: string;
	brandLogo?: string;
}

export const PDPAbout = ({
	fontColor,
	brandDetails,
	brandLogo,
}: PDPAboutProps): JSX.Element => {
	return (
		<div
			className={`text-${fontColor} border-t border-primary w-5/6 lg:w-4/5 my-5 mx-auto lg:mx-0 lg:my-10`}>
			<h3 className='text-lg italic font-medium my-4'>About The Brand</h3>
			<div className='flex flex-col lg:flex-row'>
				<div className='lg:mr-10 mb-5'>
					<img 
					src={brandLogo}
					alt={'about-brand-logo'}
					width={1500}
					height={1500}
					className={'rounded-lg'}
					/>
				</div>
				<div>
					<p className='text-md overflow-clip'>{brandDetails}</p>
				</div>
			</div>
		</div>
	);
};
