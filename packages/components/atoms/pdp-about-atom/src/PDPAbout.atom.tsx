import React from 'react';
import { ButtonCTA } from '../../button-cta/src';
import { PlusSign } from '../../plus-sign-atom/src';

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
	const [sectionOpen, setSectionOpen] = React.useState(false);
	return (
		<div
			className={`text-${fontColor} border-t border-primary w-5/6 my-5 mx-auto lg:my-10 px-5`}>
			<div className='flex flex-row justify-between'>
				<h3 className='text-lg italic font-medium my-4'>About The Brand</h3>
				<PlusSign onClick={() => setSectionOpen(!sectionOpen)} />
			</div>

			<div
				className={`${
					sectionOpen ? `flex flex-col lg:flex-row lg:gap-x-8` : `hidden`
				}`}>
				<div className='w-3/4 mx-auto mb-5 lg:mb-0'>
					<img
						src={brandLogo}
						alt='about-brand-logo'
						className='object-scale-down'
					/>
				</div>
				<div className='w-auto my-auto'>
					<p className='text-sm overflow-clip lg:m-auto'>{brandDetails}</p>
				</div>
			</div>
			<div className='hidden mt-10 mx-auto lg:mx-0 flex flex-row justify-center lg:w-1/5 lg:justify-start'>
				<ButtonCTA title='shop all' color='gray-50' fontColor='gray-500' />
			</div>
		</div>
	);
};
