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
				<div className='mb-5 w-4/12 mx-auto'>
					<img
						src={brandLogo}
						alt='about-brand-logo'
						className='object-scale-down'
					/>
				</div>
				<div className='w-auto'>
					<p className='text-md overflow-clip'>{brandDetails}</p>
				</div>
			</div>
		</div>
	);
};
