import React, { FC, useContext } from 'react';
import { PDPImage } from '../../../atoms/pdp-image-atom/src';
import { PDPText } from '../../../atoms/pdp-text-atom/src';
import { PDPAbout } from '../../../atoms/pdp-about-atom/src';
import { PDPIngredient } from '../../../atoms/pdp-ingredient-atom/src'
import { ButtonCTA } from '../../../atoms/button-cta/src';

import { CartContext } from '../../../../services/context/cart-context';

export interface PDPMoleculeProps {
	fontColor?;
	onAddToCart?;
	/* Props here */
}

export const PDPMolecule: FC<PDPMoleculeProps> = ({
	fontColor,
	onAddToCart,
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
				<PDPText fontColor='gray-500' />
				<div className='flex m-auto justify-center w-full lg:w-1/5 lg:mt-8'>
					<ButtonCTA title='add to cart' handleClick={() => onAddToCart()} />
				</div>
			</div>

			<div>
				<PDPIngredient 
					fontColor='gray-500' 
					productIL='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus tellus sit amet ligula pretium, quis consectetur dui euismod. Pellentesque efficitur eleifend vehicula. Vivamus vulputate leo vitae libero tempor, sed molestie augue pretium. Morbi semper, justo et tincidunt sagittis, magna metus euismod ipsum, at congue odio leo ac dolor. Cras ut lobortis tellus. Aenean massa tortor, finibus ac tristique sed, auctor ac mi. Donec quis placerat lacus. Donec placerat elementum leo, et feugiat orci euismod at. Maecenas sed gravida nunc. Sed sed nibh tellus. Mauris vulputate, ex convallis tempus consectetur, augue erat euismod mi, in vestibulum ex leo id ligula. Duis dictum euismod leo eleifend laoreet. Nunc finibus turpis leo, a semper quam pellentesque eget.'/>
			</div>
			<div>
				<PDPAbout
					fontColor='gray-500'
					brandDetails={brandInfo ? brandInfo.description : null}
					brandLogo={brandInfo ? brandInfo.img : null}
				/>
			</div>
		</div>
	);
};
