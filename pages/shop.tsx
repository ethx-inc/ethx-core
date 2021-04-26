import React, { FC } from 'react';
import { NavBar } from '../packages/components/organisms/nav-bar-organism/src'
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src'
import { ButtonBrowse } from '../packages/components/atoms/browse-button-atom/src'
import { ButtonCTA } from '../packages/components/atoms/button-cta/src';
import { MixedSectionText } from '../packages/components/atoms/mixed-section-text/src'

export interface ShopProps {

}

const Shop: FC<ShopProps> = ({

}: ShopProps) => {

    function showCos() {
        if (document.getElementById('makeup')) {
            document.getElementById('browseall').style.display = 'none';
            document.getElementById('browsemakeup').style.display = 'flex';
            document.getElementById('restart').style.display = 'flex';
        }
    }
    function restartBrowse() {
        window.location.reload();
    }
    return (
        <div>
            <NavBar/>
            <MainContentContainer css="flex flex-col items-center h-5/6 mt-10">
                <MixedSectionText css="mixedtext" title={'browse'} subtitle={'all products'}/>
                <div id='browseall' className='flex flex-col lg:flex-row'>
                    <div id='makeup'><ButtonBrowse title={'makeup'} onClick={() => showCos()}/></div>
                    <div id='hair'><ButtonBrowse title={'hair'} /></div>
                    <div id='fragrance'><ButtonBrowse title={'fragrance'} /></div>
                    <div id='skin'><ButtonBrowse title={'skin'} /></div>
                    <div id='shopall'><ButtonBrowse title={'shop all'} /></div>
                </div>
                <div id='browsemakeup' className='hidden flex flex-col lg:flex-row'>
                    <div id='eye'><ButtonBrowse title={'eye'} /></div>
                    <div id='face'><ButtonBrowse title={'face'} /></div>
                    <div id='lip'><ButtonBrowse title={'lip'} /></div>
                    <div id='remover'><ButtonBrowse title={'makeup remover'} /></div>
                </div>
                <div id='restart' className='hidden'><ButtonCTA title={'restart'} onClick={() => restartBrowse()}/></div>
            </MainContentContainer>
        </div>

    );
}

export default Shop;