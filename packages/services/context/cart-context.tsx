import React, { useState } from 'react';

// the data we will be storing and manipulating
type CartItem = {
	name: string;
	brand: string;
	price: string;
	description: string;
	size?: string[];
	color?: string[];
	img: string;
	brandImg: string;
	brandDescription: string;
};
export type CartData = {
	items: CartItem[];
	selectedItem: CartItem;
};

export type FilterProps = {
	// access point to the data
	cartData: CartData;
	// setter for the data
	setCartData: (filter: CartData) => void;
};

// the created context that can be used elsewhere to gain access to loginData and set it
export const CartContext = React.createContext<FilterProps>({
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
