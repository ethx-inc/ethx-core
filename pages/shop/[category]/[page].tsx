import React, { FC, useContext } from 'react';
import {NavBarController} from '../../../packages/controllers/navbar-controller/NavBarController'
import {MainContentContainer} from '../../../packages/components/atoms/main-content-container-atom/src'
import {ItemCardGrid} from '../../../packages/components/molecules/item-card-grid-molecule/src/ItemCardGrid.molecule'
import {ItemCard} from '../../../packages/components/atoms/item-card-atom/src/ItemCard.atom'

import { FilterContext } from '../../../packages/services/context/filter-context';


export interface ShopItemsProps {
    
	
}

const ShopItemsPage: FC<ShopItemsProps> = ({}: ShopItemsProps) => {
    const { filterData, setFilterData } = useContext(FilterContext);
    const {items} = filterData;

	return (
		<div className='h-screen w-full bg-gray-100'>
			<NavBarController />
			<MainContentContainer css="flex justify-center items-center h-5/6">
                <ItemCardGrid>
                    {items.map(element => {
                        return (<ItemCard brandName={element.brand} productName={element.name} productImg={element.img} productPrice={element.price} />)
                    })}
                </ItemCardGrid>
			</MainContentContainer>
		</div>
	);
};

export default ShopItemsPage;