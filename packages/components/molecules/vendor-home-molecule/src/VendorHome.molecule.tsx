import React, { FC, useContext, useState } from 'react';
import { PDPAbout } from '../../../atoms/pdp-about-atom/src';
import { SellersBanner } from '../../../atoms/sellers-banner-atom/src';
import { ItemCard } from '../../../atoms/item-card-atom/src/ItemCard.atom';
import { ItemCardGrid } from '../../item-card-grid-molecule/src/ItemCardGrid.molecule';
import { MixedSectionText } from '../../../atoms/mixed-section-text/src';
import { ButtonCTA } from '../../../atoms/button-cta/src';
import { SellersInfo } from '../../../atoms/sellers-info-atom/src';
import { AddProduct } from '../../../atoms/add-product-modal-atom/src';

export interface VendorHomeProps {
	brandDetails?: string;
	brandLogo?: string;
	brandName?: string;
	memberSince?: string;
	onSubmit?;
	productImg?: string;
	productName?: string;
	productPrice?: string;
	shopOwner?: string;
	totalOrders?: string;
}

export const VendorHome: FC<VendorHomeProps> = ({
	brandDetails,
	brandLogo,
	brandName,
	memberSince,
	onSubmit,
	productImg,
	productName,
	productPrice,
	shopOwner,
	totalOrders,
}: VendorHomeProps) => {
	const [addNewProduct, setAddNewProduct] = React.useState(false);
	return (
		<div>
			<SellersBanner />
			<div className='w-full mb-10'>
				<MixedSectionText title={brandName} subtitle='your products' />
			</div>
			<ItemCardGrid>
				<ItemCard
					brandName={brandName}
					productName={productName}
					productPrice={productPrice}
					productImg={productImg}
				/>
				<ItemCard
					brandName={brandName}
					productName={productName}
					productPrice={productPrice}
					productImg={productImg}
				/>
				<ItemCard
					brandName={brandName}
					productName={productName}
					productPrice={productPrice}
					productImg={productImg}
				/>
				<ItemCard
					brandName={brandName}
					productName={productName}
					productPrice={productPrice}
					productImg={productImg}
				/>
				<ItemCard
					brandName={brandName}
					productName={productName}
					productPrice={productPrice}
					productImg={productImg}
				/>
			</ItemCardGrid>
			<div className='flex flex-col justify-center w-full'>
				<div className='w-full lg:w-2/5 mt-10 mx-auto flex justify-center'>
					<ButtonCTA
						title='add new product'
						handleClick={() => setAddNewProduct(!addNewProduct)}
					/>
				</div>
				<div className={`${addNewProduct ? `flex mx-auto` : `mx-auto hidden`}`}>
					<AddProduct />
				</div>
			</div>
			<SellersInfo
				shopOwner={shopOwner}
				memberSince={memberSince}
				totalOrders={totalOrders}
			/>
			<PDPAbout
				fontColor='gray-600'
				brandLogo={brandLogo}
				brandDetails={brandDetails}
			/>
		</div>
	);
};
