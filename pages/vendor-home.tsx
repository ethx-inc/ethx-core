import React, { FC } from 'react';
import { NavBar } from '../packages/components/organisms/nav-bar-organism/src'
import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src'
import { PDPAbout } from '../packages/components/atoms/pdp-about-atom/src'
import { SellersBanner } from '../packages/components/atoms/sellers-banner-atom/src'
import { ItemCard } from '../packages/components/atoms/item-card-atom/src/ItemCard.atom'
import { ItemCardGrid } from '../packages/components/molecules/item-card-grid-molecule/src/ItemCardGrid.molecule'
import { MixedSectionText } from '../packages/components/atoms/mixed-section-text/src'
import { ButtonCTA } from '../packages/components/atoms/button-cta/src'
import { SellersInfo} from '../packages/components/atoms/sellers-info-atom/src'
import { AddProduct } from '../packages/components/atoms/add-product-modal-atom/src';


const VendorHome: FC = () => {

    const [addNewProduct, setAddNewProduct] = React.useState(false);
    return (
        <div>
            <NavBar/>
            <MainContentContainer css="flex flex-col items-center h-5/6 mt-10">
            <SellersBanner />
            <div className='w-full mb-10 lg:ml-64'>
                <MixedSectionText title={'the best brand'} subtitle={'your products'}/>
            </div>
            <ItemCardGrid>
                <ItemCard brandName={'the best brand'} productName={'moisturizer'} productPrice={'5.99'} productImg={'/images/skincare-icon.png'}/>
                <ItemCard brandName={'the best brand'} productName={'cleanser'} productPrice={'8.99'} productImg={'/images/skincare-icon.png'}/>
                <ItemCard brandName={'the best brand'} productName={'serum'} productPrice={'12.99'} productImg={'/images/skincare-icon.png'}/>
                <ItemCard brandName={'the best brand'} productName={'fragrance'} productPrice={'20.99'} productImg={'/images/skincare-icon.png'}/>
                <ItemCard brandName={'the best brand'} productName={'body lotion'} productPrice={'15.99'} productImg={'/images/skincare-icon.png'}/>
            </ItemCardGrid>
            <div className='flex flex-col justify-center w-full'>
                <div className='w-full lg:w-2/5 mt-10 mx-auto flex justify-center'>
                <ButtonCTA title={'add new product'} handleClick={() => setAddNewProduct(!addNewProduct)}/>
                </div>
                <div className={`${addNewProduct ? `flex mx-auto` : `mx-auto hidden`}`}>
                <AddProduct />
                </div>
            </div>
            <SellersInfo shopOwner={'#1 Seller'} memberSince={'03-02-2021'} totalOrders={'24'}/>
            <PDPAbout brandLogo='/images/square-placeholder.jpeg' brandDetails={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus tellus sit amet ligula pretium, quis consectetur dui euismod. Pellentesque efficitur eleifend vehicula. Vivamus vulputate leo vitae libero tempor, sed molestie augue pretium. Morbi semper, justo et tincidunt sagittis, magna metus euismod ipsum, at congue odio leo ac dolor. Cras ut lobortis tellus. Aenean massa tortor, finibus ac tristique sed, auctor ac mi. Donec quis placerat lacus. Donec placerat elementum leo, et feugiat orci euismod at. Maecenas sed gravida nunc. Sed sed nibh tellus. Mauris vulputate, ex convallis tempus consectetur, augue erat euismod mi, in vestibulum ex leo id ligula. Duis dictum euismod leo eleifend laoreet. Nunc finibus turpis leo, a semper quam pellentesque eget.'}/>
            </MainContentContainer>
        </div>

    );
}

export default VendorHome;