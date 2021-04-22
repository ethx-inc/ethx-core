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
    return (
        <div>
            <NavBar/>
            <MainContentContainer css="flex flex-col items-center h-5/6 mt-10">
                <MixedSectionText title={'browse'} subtitle={'all products'}/>
                <div css='flex lg:flex-row'>
                    <ButtonBrowse title={'by cause'} />
                    <ButtonBrowse title={'by category'} />
                    <ButtonBrowse title={'shop all'} />
                </div>
                <ButtonArrow title={'next'} />
            </MainContentContainer>
        </div>

    );
}

export default Shop;

<script>

</script>