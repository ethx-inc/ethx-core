import React from 'react';

export interface DownArrowProps {
	onClick?;
}

export const DownArrow = ({ onClick }: DownArrowProps): JSX.Element => {
	return (
		<button type='button' onClick={() => onClick()}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className='w-4 lg:w-6 relative top-0.5'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M19 9l-7 7-7-7'
					/>
				</svg>
		</button>
	);
};
