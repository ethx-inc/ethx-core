import React, { FC } from 'react';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src';
import {PDPMoleculeController} from '../packages/controllers/PDPMoleculeController';

export interface PDPProps {

}

const PDP: FC<PDPProps> = ({

}: PDPProps) => {
    return (
        <div>
            <NavBarController/>
            <MainContentContainer css="flex justify-center items-center h-5/6">
                <div css='mt-10'>
                <PDPMoleculeController />
                </div>
            </MainContentContainer>
        </div>

    );
}

export default PDP;