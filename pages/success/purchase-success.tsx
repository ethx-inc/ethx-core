import React, { FC } from 'react';
import { NavBarController } from '../../packages/controllers/navbar-controller/NavBarController';
import { HeroText } from '../../packages/components/atoms/hero-text/src';


export interface PurchaseSuccessProps {

}

const PurchaseSuccess: FC<PurchaseSuccessProps> = ({

}: PurchaseSuccessProps) => {

    return (
        <div>
            <NavBarController/>
            <HeroText fontColor={'primary'} subtitle={''} title={'Purchase successful!'} />
        </div>

    );
}

export default PurchaseSuccess;