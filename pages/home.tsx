import React, { FC } from 'react';
import { HeroText } from '../packages/components/atoms/hero-text/src';
import { SectionText } from '../packages/components/atoms/section-text/src';
import { IconWrapper } from '../packages/components/organisms/icon-wrapper-organism/src/IconWrapper.organism';
import { FilterMoc } from '../packages/components/organisms/filter-moc-organism/src/FilterMoc.organism';
import { ButtonArrow } from '../packages/components/atoms/button-cta-arrow/src';
import { TestimonialController} from '../packages/controllers/testimonials-controller/TestimonialController';

export interface HomeProps {
	color?: string;
	fontColor?: string;
	title?: string;
	subtitle?: string;
}

export const HomePage: FC<HomeProps> = ({
	color,
	fontColor,
	title,
	subtitle
}: HomeProps) => {

    let testimonials = [
        {name:'Blake' , quote:'I like eggs', img:'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'},
        {name:'Blake' , quote:'I like eggs', img:'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'},
        {name:'Blake' , quote:'I like eggs', img:'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg'}
    ];

	return (
		<div className='mx-auto w-3/5'>
			<header />
			<div>
				<div>
					<HeroText fontColor={'primary'} subtitle={'simplified ecommerce for the conscious consumer'} title={'ethx'} />
				</div> 
				<SectionText fontColor={'gray-500'} subtitle={'discover brands that align with what you care about'} title={'our ethical filter'} />
				<IconWrapper fontColor={'primary'} borderColor={'primary'} color={'gray-50'} title={'black-owned'} />
				<FilterMoc />
					<div>
						<ButtonArrow title={'go'}/>
					</div>
			</div>
            <TestimonialController testimonials = {testimonials}/>

		</div>
	);
};