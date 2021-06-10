import React, { FC } from 'react';
import { NavBar } from '../packages/components/organisms/nav-bar-organism/src'
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src'
import { VendorHome } from '../packages/components/molecules/vendor-home-molecule/src'


const VendorHomePage: FC = () => {

    return (
        <div>
            <NavBar/>
            <MainContentContainer css="flex flex-col items-center h-5/6 lg:mt-10">
                <VendorHome />
            </MainContentContainer>
        </div>

    );
}

export default VendorHomePage;