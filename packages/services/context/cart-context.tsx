import React, { useState } from 'react';

export type Brand = {
	name: string;
	description: string;
	img: string;
};

export type CartItem = {
	name: string;
	id: string;
	brandId: string;
	brandInfo: Brand;
	minPrice: number;
	sizes: string[];
	prices: number[];
	quantity?: number;
	bulletPoints?: string[];
	description?: string;
	selectedSize?: number;
	colors?: string[];
	selectedColor?: string;
	images: string[];
};

export type CartData = {
	items: CartItem[];
	selectedItem: CartItem;
};

export type CartProps = {
	// access point to the data
	cartData: CartData;
	// setter for the data
	setCartData: (filter: CartData) => void;
};

// the created context that can be used elsewhere to gain access to loginData and set it
export const CartContext = React.createContext<CartProps>({
	cartData: {
		items: [],
		selectedItem: null,
	},
	setCartData: cart => console.warn('no login provider'),
});

export interface CartProviderProps {
	/* Props here */
	children?;
}

// this is the provider that wraps the outer most element in your ap to provide context access to nested components
export const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
	const [cartData, setCartData] = useState<CartData>({
		items: [],
		selectedItem: null,
	});

	return (
		<CartContext.Provider value={{ cartData, setCartData }}>
			{children}
		</CartContext.Provider>
	);
};
