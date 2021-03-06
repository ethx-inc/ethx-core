import React from 'react';

export interface QuantityPillProps {
	borderColor?: string;
	quantity?: number;
	onIncrease?;
	onDecrease?;
}

export const QuantityPill = ({
	borderColor,
	quantity,
	onIncrease,
	onDecrease,
}: QuantityPillProps): JSX.Element => {
	return (
		<div
			className={`flex justify-between w-28 font-regular py-1 px-4 border-2 ${
				borderColor ? `border-${borderColor}` : 'border-primary'
			} rounded-full`}
			style={{ fontFamily: 'Roboto' }}>
			<button
				type='button'
				className='cursor-pointer w-4'
				onClick={() => onDecrease()}>
				-
			</button>
			<div>{quantity}</div>
			<button
				type='button'
				className='cursor-pointer w-4'
				onClick={() => onIncrease()}>
				+
			</button>
		</div>
	);
};
