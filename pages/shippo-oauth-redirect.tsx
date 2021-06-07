import React, { FC } from 'react';

import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { HeroText } from '../packages/components/atoms/hero-text/src';


export interface ShippoOnboardingProps {

}

const ShippoOnboardingSuccess: FC<ShippoOnboardingProps> = ({

}: ShippoOnboardingProps) => {

    return (
        <div>
            <NavBarController/>
            <HeroText fontColor={'primary'} subtitle={'Launching Summer 2021'} title={'Onboarding successful!'} />
        </div>

    );
}

export default ShippoOnboardingSuccess;
=======

import { HeroText } from '../packages/components/atoms/hero-text/src';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';

const ShippoOnboardingSuccess: FC = () => (
	<div>
		<NavBarController />
		<HeroText
			fontColor='primary'
			subtitle='Launching Summer 2021'
			title='Onboarding successful!'
		/>
	</div>
);

export default ShippoOnboardingSuccess;
