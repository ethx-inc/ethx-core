import React from 'react';

import { FilterIconController } from '../../../../controllers/filter-icon-controller/FilterIconController';

export interface IconWrapperProps {
	imgSource?: string;
	onClick?;
	title?: string;
}

export const IconWrapper = ({
	imgSource,
	onClick,
	title,
}: IconWrapperProps): JSX.Element => {
	return (
		<div className='flex flex-row justify-center overflow-x-scroll mx-auto my-5'>
			<div className='flex flex-row mx-10'>
				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIconController
							imgSource='/images/skincare-icon.png'
							title='Asian Owned'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIconController
							imgSource='/images/black-owned-icon.png'
							title='Black Owned'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIconController
							imgSource='/images/skincare-icon.png'
							title='Mom Owned'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIconController
							imgSource='/images/sustainable-packaging-icon.png'
							title='Sustainable Packaging'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIconController
							imgSource='/images/vegan-icon.png'
							title='Vegan'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIconController
							imgSource='/images/veteran-owned-icon.png'
							title='Veteran Owned'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
