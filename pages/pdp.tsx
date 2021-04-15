import React, { FC } from 'react';
import { NavBar } from '../packages/components/organisms/nav-bar-organism/src'
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src'
import { PDPMolecule } from '../packages/components/molecules/pdp-molecule/src'

export interface PDPProps {

}

const PDP: FC<PDPProps> = ({

}: PDPProps) => {
    return (
        <div>
            <NavBar/>
            <MainContentContainer css="flex justify-center items-center h-5/6">
                <div css='mt-10'>
                <PDPMolecule />
                </div>
            </MainContentContainer>
        </div>

    );
}

export default PDP;