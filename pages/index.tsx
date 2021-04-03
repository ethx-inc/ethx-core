import React from 'react';

// import { HeroText } from '../packages/components/atoms/hero-text/src';
import { SectionText } from '../packages/components/atoms/section-text/src';
import { IconWrapper } from '../packages/components/organisms/icon-wrapper-organism/src/IconWrapper.organism';
import { FilterMoc } from '../packages/components/organisms/filter-moc-organism/src/FilterMoc.organism';
import { ButtonArrow } from '../packages/components/atoms/button-cta-arrow/src';

export interface HomeProps {
	borderColor?: string;
	fontColor?: string;
	title?: string;
	subtitle?: string;
}
export const Home = (
	borderColor,
	fontColor,
	title,
	subtitle

): JSX.Element => {
	return (
		<div className='mx-auto w-3/5'>
			<header />
			<div>
				{/* <div>
					<HeroText fontColor={'primary'} subtitle={'simplified ecommerce for the conscious consumer'} title={'ethx'} />
				</div> */}
				<SectionText fontColor={'gray-500'} subtitle={'discover brands that align with what you care about'} title={'our ethical filter'} />
				<IconWrapper fontColor={'primary'} borderColor={'primary'} title={'mom-owned'} />
				<FilterMoc />
					<div>
						<ButtonArrow title={'go'}/>
					</div>
			</div>

		</div>
	);
};

export default Home;
