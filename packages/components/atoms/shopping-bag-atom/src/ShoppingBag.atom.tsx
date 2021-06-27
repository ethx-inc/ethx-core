import React from 'react';

export interface ShoppingBagProps {
	count?: number;
	color?: 'black' | 'gray-400' | 'white' | 'primary';
	onClick?;
}

export const ShoppingBag = ({
	count,
	color,
	onClick,
}: ShoppingBagProps): JSX.Element => {
	return (
		<button
			onClick={() => onClick()}
			type='button'
			className={`font-regular ${
				color ? `text-${color}` : ''
			}  relative flex justify-center items-center focus:outline-none`}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-10 w-10'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='1.5'
					d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
				/>
			</svg>
			<span className='absolute top-4 text-sm'>{count}</span>
		</button>
	);
};
