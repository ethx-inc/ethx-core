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
            <HeroText fontColor={'primary'} subtitle={''} title={'Onboarding successful!'} />
        </div>

    );
}

export default ShippoOnboardingSuccess;

