import React, { useContext } from 'react';
import { CartItem } from '../../cart-item-atom/src';

import { CartContext } from '../../../../services/context/cart-context';

export interface CartSummaryProps {
	onClick?;
}

export const CartSummary = ({ onClick }: CartSummaryProps): JSX.Element => {
	const { cartData, setCartData } = useContext(CartContext);
	const { items, selectedItem } = cartData;
	const keys = Object.keys(items);

	const onRemove = key => {
		const newItems = items;
		delete newItems[key];
		setCartData({ items: { ...newItems }, selectedItem });
	};

	const onChange = (key, val) => {
		const newItems = items;
		newItems[key].quantity += val;
		if (newItems[key].quantity < 1) {
			onRemove(key);
		} else {
			setCartData({ items: { ...newItems }, selectedItem });
		}
	};

	return (
		<div className='flex flex-col lg:flex-row w-full lg:w-1/2 mt-2 md:mt-10'>
			<div className='cart-order-basket w-full px-3'>
				<div className='text-2xl font-light mb-1'>
					<h3>Your Basket </h3>
				</div>
				<div className='text-sm border-b-2 pb-3 font-light italic'>
					<h3>Thanks for shopping ethically! </h3>
				</div>
				<div>
					{keys.map(key => {
						const {
							name,
							brandInfo,
							sizes,
							prices,
							quantity,
							selectedSize,
							colors,
							selectedColor,
							images,
						} = items[key];

						return (
							<CartItem
								key={key}
								name={name}
								brandInfo={brandInfo}
								sizes={sizes}
								prices={prices}
								quantity={quantity}
								selectedSize={selectedSize}
								colors={colors}
								selectedColor={selectedColor}
								images={images}
								onIncrease={() => onChange(key, 1)}
								onDecrease={() => onChange(key, -1)}
								onRemove={() => onRemove(key)}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
