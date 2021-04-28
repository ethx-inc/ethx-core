import React, { FC } from 'react';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src';
import { PDPMolecule } from '../packages/components/molecules/pdp-molecule/src';

export interface PDPProps {

}

const PDP: FC<PDPProps> = ({

}: PDPProps) => {
    return (
        <div>
            <NavBarController/>
            <MainContentContainer css="flex justify-center items-center h-5/6">
                <div css='mt-10'>
                <PDPMolecule />
                </div>
            </MainContentContainer>
        </div>

    );
}

export default PDP;