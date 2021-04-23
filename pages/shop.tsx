import React, { FC } from 'react';
import { NavBar } from '../packages/components/organisms/nav-bar-organism/src'
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src'
import { ButtonBrowse } from '../packages/components/atoms/browse-button-atom/src'
import { ButtonArrow } from '../packages/components/atoms/button-cta-arrow/src';
import { MixedSectionText } from '../packages/components/atoms/mixed-section-text/src'

export interface ShopProps {

}

const Shop: FC<ShopProps> = ({

}: ShopProps) => {

    function showCat() {
        if (document.getElementById('bycategory')) {
            document.getElementById('browseall').style.display = 'none';
            document.getElementById('browsecategory').style.display = 'flex';
        }
    }
    function showCos() {
        if (document.getElementById('cosmetics')) {
            document.getElementById('browsecategory').style.display = 'none';
            document.getElementById('browsecosmetics').style.display = 'flex';
        }
    }
    return (
        <div>
            <NavBar/>
            <MainContentContainer css="flex flex-col items-center h-5/6 mt-10">
                <MixedSectionText css="mixedtext" title={'browse'} subtitle={'all products'}/>
                <div id='browseall' className='flex flex-col lg:flex-row'>
                    <div id='bycause'><ButtonBrowse title={'by cause'} /></div>
                    <div id='bycategory'><ButtonBrowse title={'by category'} onClick={() => showCat()}/></div>
                    <div id='shopall'><ButtonBrowse title={'shop all'} /></div>
                </div>
                <div id='browsecategory' className='hidden flex flex-col lg:flex-row'>
                    <div id='cosmetics'><ButtonBrowse title={'cosmetics'} onClick={() => showCos()}/></div>
                    <div id='haircare'><ButtonBrowse title={'hair care'} /></div>
                    <div id='haircolor'><ButtonBrowse title={'hair color'} /></div>
                    <div id='skincare'><ButtonBrowse title={'skincare'} /></div>
                </div>
                <div id='browsecosmetics' className='hidden flex flex-col lg:flex-row'>
                    <div id='eye'><ButtonBrowse title={'eye'} /></div>
                    <div id='face'><ButtonBrowse title={'face'} /></div>
                    <div id='lip'><ButtonBrowse title={'lip'} /></div>
                    <div id='remover'><ButtonBrowse title={'makeup remover'} /></div>
                </div>
            </MainContentContainer>
        </div>

    );
}

export default Shop;