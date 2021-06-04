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
			<HeroText fontColor={'white'} subtitle={''} title={'Seller Portal Coming Soon'} />
                <div className='flex flex-col justify-center pt-16 pb-20 bg-gray-50'>
                    <h4 className='text-lg text-primary font-medium text-center mt-6'>Submit your shop to be considered!</h4>
                    <NavLink label={'Ethx Merchant Application'} href={'https://forms.gle/Ar2dVFhdR1CVfbRd9'} css={'text-center text-primary'}/>
                </div>
		</div>
	);
};

export default SellPage