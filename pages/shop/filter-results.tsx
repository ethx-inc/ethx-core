import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import {NavBarController} from '../../packages/controllers/navbar-controller/NavBarController'
import {MainContentContainer} from '../../packages/components/atoms/main-content-container-atom/src'
import {ItemCardGrid} from '../../packages/components/molecules/item-card-grid-molecule/src/ItemCardGrid.molecule'
import {ItemCard} from '../../packages/components/atoms/item-card-atom/src/ItemCard.atom'

import { FilterContext } from '../../packages/services/context/filter-context';
import { CartContext, CartItem, Brand } from '../../packages/services/context/cart-context';

import {
    getProduct,
    getBrand
} from '../../packages/services/firebase/firebase.db';

export interface FilterResultsProps {
}

const FilterResultsPage: FC<FilterResultsProps> = ({}: FilterResultsProps) => {
    const router = useRouter();
    const {cartData, setCartData} = useContext(CartContext);
    const { filterData, setFilterData } = useContext(FilterContext);
    const {items, category, selectedEthx, firstItem, lastItem } = filterData;

    async function goToPDP(item: CartItem) {
        const selectedItem = await getProduct(item.id) as CartItem;
        const brandInfo = await getBrand(selectedItem.brandId) as Brand;
        if (selectedItem !== null) {
            setCartData({...cartData, selectedItem: {...selectedItem, minPrice: item.minPrice, id:item.id,  brandInfo, selectedSize: 0}})
        }
        router.push('/pdp');
    }

    return(
        <div className='min-h-screen h-full w-full bg-white'>
            <NavBarController />
            <MainContentContainer css="flex flex-col justify-center items-center h-auto mt-10">
                <ItemCardGrid>
                {items.length > 0 ? items.map(element => {
                        return (<ItemCard 
                            key={element.id} 
                            brandName={element.brand} 
                            productName={element.name} 
                            productImg={element.img} 
                            productPrice={element.minPrice} 
                            onClick={()=> goToPDP({...element})}
                            />)
                    }) :
                    <span>Page failed to load please go back to Shop</span>
                    }

                </ItemCardGrid>
            </MainContentContainer>
        </div>

    );
};

export default FilterResultsPage;