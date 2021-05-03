import React, { FC } from 'react';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src'
import { MixedSectionText } from '../packages/components/atoms/mixed-section-text/src'
import { BrowseAllController } from '../packages/controllers/browse-all-controller/BrowseAllController';
import { BrowseCos } from '../packages/components/molecules/browse-cos-molecule/src/browseCos.molecule'
import { ButtonArrow } from '../packages/components/atoms/button-cta-arrow/src'


export interface ShopProps {

}

const Shop: FC<ShopProps> = ({

}: ShopProps) => {

    function restartBrowse() {
        document.getElementById('browsemakeup').style.display = 'none';
        document.getElementById('restart').style.display = 'none';
        document.getElementById('browseall').style.display = 'flex';
    }
    return (
        <div>
            <NavBarController/>
            <MainContentContainer css="flex flex-col items-center h-5/6 mt-10">
                <MixedSectionText css="mixedtext" title={'browse'} subtitle={'all products'}/>
                <BrowseAllController />
                <BrowseCos />
                <div id='restart' className='hidden'>
                    <ButtonArrow title={'restart'} onClick={() => restartBrowse()}/>
                </div>
            </MainContentContainer>
        </div>

    );
}

export default Shop;