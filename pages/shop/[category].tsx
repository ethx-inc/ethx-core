import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import {NavBarController} from '../../packages/controllers/navbar-controller/NavBarController'
import {MainContentContainer} from '../../packages/components/atoms/main-content-container-atom/src'
import {ItemCardGrid} from '../../packages/components/molecules/item-card-grid-molecule/src/ItemCardGrid.molecule'
import {ItemCard} from '../../packages/components/atoms/item-card-atom/src/ItemCard.atom'
import {NavButton} from '../../packages/components/atoms/nav-button-atom/src';
import {MdKeyboardArrowRight} from '@react-icons/all-files/md/MdKeyboardArrowRight';
import {MdKeyboardArrowLeft} from '@react-icons/all-files/md/MdKeyboardArrowLeft';

import { FilterContext } from '../../packages/services/context/filter-context';
import { CartContext, CartItem } from '../../packages/services/context/cart-context';

import {
	nextPageInQuery,
    prevPageInQuery
} from '../../packages/services/firebase/firebase.db';


export interface ShopItemsProps {
}

const ShopItemsPage: FC<ShopItemsProps> = ({}: ShopItemsProps) => {
    const router = useRouter();
    const {cartData, setCartData} = useContext(CartContext);
    const { filterData, setFilterData } = useContext(FilterContext);
    const {items, category, selectedEthx, firstItem, lastItem } = filterData;

    async function nextPage(category) {
		const { items: newItems, firstItem: newFirstItem, lastItem: newLastItem } = await nextPageInQuery(
			category,
			selectedEthx, 
            firstItem,
            lastItem
		);
		if (newItems.length > 0) {
            setFilterData({
                ...filterData,
                items: newItems,
                category,
                firstItem: newFirstItem,
                lastItem: newLastItem,
                firstItemInCollection: firstItem,
            });
        }
	}

    async function prevPage(category) {
		const { items: newItems, firstItem: newFirstItem, lastItem: newLastItem } = await prevPageInQuery(
			category,
			selectedEthx,
            firstItem,
            lastItem
		);
        if (newItems.length > 0) {
            setFilterData({
                ...filterData,
                items: newItems,
                category,
                firstItem: newFirstItem,
                lastItem: newLastItem,
                firstItemInCollection: firstItem,
            });
        }
	}

    function goToPDP(selectedItem: CartItem) {
        setCartData({...cartData, selectedItem})
        router.push('/pdp');
    }

	return (
		<div className='h-screen w-full bg-gray-100'>
			<NavBarController />
			<MainContentContainer css="flex flex-col justify-center items-center h-auto mt-10">
                <ItemCardGrid>
                    {items.length > 0 ? items.map(element => {
                        return (<ItemCard 
                            key={element.id} 
                            brandName={element.brand} 
                            productName={element.name} 
                            productImg={element.img} 
                            productPrice={element.price} 
                            onClick={()=> goToPDP({...element})}
                            />)
                    }) :
                    <span>Page failed to load please go back to Shop</span>
                    }
                </ItemCardGrid>
                <div className='flex flex-row mt-10 w-full sm:w-4/12 justify-around'>
                    <NavButton label='last' color='white' bgColor='primary' css={'w-24'} flip onClick={()=>prevPage(category)}>
                        <MdKeyboardArrowLeft className='text-2xl mt-0.5'/>
                    </NavButton>
                    <NavButton label='next' color='white' bgColor='primary' css={'w-24 justify-end'} onClick={()=>nextPage(category)}>
                        <MdKeyboardArrowRight className='text-2xl mt-0.5'/>
                    </NavButton>
                </div>
			</MainContentContainer>
		</div>
	);
};

export default ShopItemsPage;