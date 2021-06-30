import React, { FC } from 'react';

import { HeroText } from '../packages/components/atoms/hero-text/src';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src';
import { SectionText } from '../packages/components/atoms/section-text/src';
import { FilterMoc } from '../packages/components/organisms/filter-moc-organism/src/FilterMoc.organism';
import { IconWrapper } from '../packages/components/organisms/icon-wrapper-organism/src/IconWrapper.organism';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { TestimonialController } from '../packages/controllers/testimonials-controller/TestimonialController';
import { getAllNewBrand } from '../packages/services/firebase/firebase.db';

export interface HomeProps {
	color?: string;
	fontColor?: string;
	title?: string;
	subtitle?: string;
}

const HomePage: FC<HomeProps> = ({
	color,
	fontColor,
	title,
	subtitle,
}: HomeProps) => {
	const testimonials = [
		{
			name: 'Ruby Dove, Founder',
			quote:
				'Welcome! We appreciate your patience as we work to create a platform that facilitates a simple & meaningful experience.',
			id: 0,
		},
	];

	console.log(JSON.stringify(getAllNewBrand()));

	return (
		<div className='mx-auto'>
			<NavBarController />
			<HeroText
				fontColor='white'
				subtitle='simplified ecommerce for the conscious consumer'
				title='ethx'
			/>
			<MainContentContainer>
				<SectionText
					fontColor='gray-500'
					subtitle='discover brands that align with what you care about'
					title='our ethical filter'
				/>
				<div className='hidden'>
					<h4 className='text-xs text-gray-500 font-medium -mt-1 text-center lg:text-left'>
						*GB = Giving Back
					</h4>
				</div>
				<IconWrapper />
				<FilterMoc />
			</MainContentContainer>
			<TestimonialController testimonials={testimonials} />
			<div className='bg-primary text-center text-sm lg:text-lg text-light text-white py-2 px-4'>
				Need Help? Contact us at{' '}
				<span className='cursor-pointer underline'>support@ethx.shop</span> for
				a response within 48 hours!
			</div>
		</div>
	);
};

export default HomePage;
