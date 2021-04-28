import React, { FC } from 'react';
import { NavBar } from '../packages/components/organisms/nav-bar-organism/src'
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src'
import { MixedSectionText } from '../packages/components/atoms/mixed-section-text/src'
import { BrowseAll } from '../packages/components/molecules/browse-all-molecule/src/browseAll.molecule'
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
            <NavBar/>
            <MainContentContainer css="flex flex-col items-center h-5/6 mt-10">
                <MixedSectionText css="mixedtext" title={'browse'} subtitle={'all products'}/>
                <BrowseAll />
                <BrowseCos />
                <div id='restart' className='hidden'>
                    <ButtonArrow title={'restart'} onClick={() => restartBrowse()}/>
                </div>
            </MainContentContainer>
        </div>

    );
}

export default Shop;