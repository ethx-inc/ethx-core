import React, { FC } from 'react';
import {NavBarController} from '../../packages/controllers/navbar-controller/NavBarController'
import {MainContentContainer} from '../../packages/components/atoms/main-content-container-atom/src'


export interface ShopItemsProps {
    
	
}

const ShopItemsPage: FC<ShopItemsProps> = ({}: ShopItemsProps) => {

	return (
		<div className='h-screen w-full bg-gray-100'>
			<NavBarController />
			<MainContentContainer css="flex justify-center items-center h-5/6">

			</MainContentContainer>
		</div>
	);
};

export default ShopItemsPage;
