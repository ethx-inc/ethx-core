import React, { FC } from 'react';
import {NavBarController} from '../packages/controllers/navbar-controller/NavBarController';
import { HeroText } from '../packages/components/atoms/hero-text/src';
import { SectionText } from '../packages/components/atoms/section-text/src';
import { IconWrapper } from '../packages/components/organisms/icon-wrapper-organism/src/IconWrapper.organism';
import { FilterMoc } from '../packages/components/organisms/filter-moc-organism/src/FilterMoc.organism';
import { TestimonialController} from '../packages/controllers/testimonials-controller/TestimonialController';
import {MainContentContainer} from '../packages/components/atoms/main-content-container-atom/src'

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
	subtitle
}: HomeProps) => {

    let testimonials = [
        {name:'Ruby Dove, Founder' , quote:'Welcome! We are conducting site maintenance to ensure we are creating a platform that facilitates a simple & meaningful experience. You may notice errors within the platform, but know that they are being addressed!', 
		id: 0},

    ];

	return (
		<div className='mx-auto'>
			<NavBarController />
			<HeroText fontColor={'white'} subtitle={'simplified ecommerce for the conscious consumer'} title={'ethx'} />
			<MainContentContainer >
				<SectionText fontColor={'gray-500'} subtitle={'discover brands that align with what you care about'} title={'our ethical filter'} />
				<div className='hidden'><h4 className='text-xs text-gray-500 font-medium -mt-1 text-center lg:text-left'>*GB = Giving Back</h4></div>
				<IconWrapper />
				<FilterMoc />
			</MainContentContainer>
            <TestimonialController testimonials = {testimonials}/>
			<div className='bg-primary text-center text-sm lg:text-lg text-light text-white py-2 px-4'>Need Help? Contact us at <span className='cursor-pointer underline'>support@ethx.shop</span> for a response within 48 hours!</div>
		</div>
	);
};

export default HomePage