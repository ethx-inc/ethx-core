import React, { FC, useContext } from 'react';
import { useRouter } from 'next/router';
import { PDPMolecule } from '../components/molecules/pdp-molecule/src';

import { CartContext } from '../services/context/cart-context';

export const PDPMoleculeController: FC = () => {
	const router = useRouter();
	const { cartData, setCartData } = useContext(CartContext);
	const { items, selectedItem } = cartData;

	function onAddToCart() {
		const newItems = items;
		const key =
			selectedItem.id +
			selectedItem.selectedSize +
			selectedItem.selectedColor;
		if (key in newItems) {
			newItems[key].quantity += 1;
		} else {
			newItems[key] = selectedItem;
			newItems[key].quantity = 1;
		}
		setCartData({ items: { ...newItems }, selectedItem });
		router.back();
	}

	return <PDPMolecule onAddToCart={() => onAddToCart()} />;
};
