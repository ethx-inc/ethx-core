import React, { FC } from 'react';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { HeroText } from '../packages/components/atoms/hero-text/src';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src'
import { NavLink } from '../packages/components/atoms/nav-link-atom/src'

export interface SellPageProps {
	color?: string;
	fontColor?: string;
	title?: string;
	subtitle?: string;
}

const SellPage: FC<SellPageProps> = ({
	color,
	fontColor,
	title,
	subtitle
}: SellPage) => {


	return (
		<div className='mx-auto'>
			<NavBarController />
			<HeroText fontColor={'primary'} subtitle={'Launching Summer 2021'} title={'Seller Portal Coming Soon'} />
                <div className='flex flex-col justify-center pt-20 w-full'>
                    <h4 className='text-lg text-primary font-medium text-center '>Submit your shop to be considered!</h4>
                    <NavLink label={'Ethx Merchant Application'} href={'https://docs.google.com/forms/d/1sM0MjJd8VO83919ObcpMGZHc2_YGT55zCNvAq-mkws0/edit?usp=drive_web'} css={'text-center'}/>
                </div>
		</div>
	);
};

export default SellPage