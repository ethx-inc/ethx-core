import React, { FC } from 'react';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { HeroText } from '../packages/components/atoms/hero-text/src';
import { NavLink } from '../packages/components/atoms/nav-link-atom/src';

export interface SellPageProps {

}

const SellPage: FC<SellPageProps> = ({

}: SellPageProps) => {


	return (
		<div className='mx-auto'>
			<NavBarController />
			<HeroText fontColor={'white'} subtitle={'Launching Summer 2021'} title={'Seller Portal Coming Soon'} />
                <div className='flex flex-col justify-center pt-20 pb-32 bg-gray-50'>
                    <h4 className='text-lg text-primary font-medium text-center mt-6'>Submit your shop to be considered!</h4>
                    <NavLink label={'Ethx Merchant Application'} href={'https://forms.gle/PZPe967F9HRHh18u7'} css={'text-center'}/>
                </div>
		</div>
	);
};

export default SellPage