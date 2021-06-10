import React, { FC, useContext } from 'react';

import { CartContext } from '../../../../services/context/cart-context';
import { ButtonCTA } from '../../../atoms/button-cta/src';
import { PDPAbout } from '../../../atoms/pdp-about-atom/src';
import { PDPImage } from '../../../atoms/pdp-image-atom/src';
import { PDPIngredient } from '../../../atoms/pdp-ingredient-atom/src';
import { PDPText } from '../../../atoms/pdp-text-atom/src';

export interface PDPMoleculeProps {
	fontColor?;
	onAddToCart?;
	ingredients?;
	/* Props here */
}

export const PDPMolecule: FC<PDPMoleculeProps> = ({
	fontColor,
	onAddToCart,
	ingredients,
}: PDPMoleculeProps) => {
	const { cartData, setCartData } = useContext(CartContext);
	const { items, selectedItem } = cartData;
	const { brandInfo } = selectedItem || { brandInfo: null };

	return (
		<div>
			<div className='flex flex-col lg:flex-row lg:flex-start lg:mt-10 mb-3 lg:mb-10'>
				<PDPImage
					pdpImages={selectedItem ? selectedItem.images : null}
					productName={selectedItem.name}
				/>
				<PDPText fontColor='gray-600' />
				<div className='flex m-auto justify-center w-full lg:w-1/5 lg:mt-8'>
					<ButtonCTA title='add to cart' handleClick={() => onAddToCart()} />
				</div>
			</div>

			<div>
				<PDPIngredient fontColor='gray-600' productIL={ingredients} />
			</div>
			<div>
				<PDPAbout
					fontColor='gray-600'
					brandDetails={brandInfo ? brandInfo.description : null}
					brandLogo={brandInfo ? brandInfo.img : null}
				/>
			</div>
		</div>
	);
};
