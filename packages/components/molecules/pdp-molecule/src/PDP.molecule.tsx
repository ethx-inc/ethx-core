import React, { FC, useContext } from 'react';
import { PDPImage } from '../../../atoms/pdp-image-atom/src';
import { PDPText } from '../../../atoms/pdp-text-atom/src';
import { PDPAbout } from '../../../atoms/pdp-about-atom/src';
import { ButtonCTA } from '../../../atoms/button-cta/src';

import { CartContext } from '../../../../services/context/cart-context';

export interface PDPMoleculeProps {
	brandDetails?;
	bulletOne?;
	bulletTwo?;
	bulletThree?;
	fontColor?;
	productDetails?;
	productName?;
	/* Props here */
}

export const PDPMolecule: FC<PDPMoleculeProps> = ({
	fontColor,
	brandDetails,
}: PDPMoleculeProps) => {
	const { cartData, setCartData } = useContext(CartContext);
	const { items, selectedItem } = cartData;
	const { brandInfo } = selectedItem;

	return (
		<div>
			<div className='flex flex-col lg:flex-row lg:flex-start lg:mt-10 mb-3 lg:mb-10'>
				<PDPImage pdpImages={selectedItem.images} />
				<PDPText fontColor='gray-500' />
			</div>
			<div className='flex relative m-auto justify-center lg:w-1/5 lg:bottom-10'>
				<ButtonCTA title='add to cart' />
			</div>
			<div>
				<PDPAbout
					fontColor='gray-500'
					brandDetails={brandInfo.description}
					brandLogo={brandInfo.img}
				/>
			</div>
			<div className='mb-10 flex relative justify-center lg:w-1/5 lg:justify-start'>
				{' '}
				<ButtonCTA
					title='shop all'
					color='gray-50'
					fontColor='gray-500'
				/>{' '}
			</div>
		</div>
	);
};
