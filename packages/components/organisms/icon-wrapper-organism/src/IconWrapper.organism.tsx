import React from 'react';

import { FilterIcon } from '../../../atoms/filter-icon/src/FilterIcon.atom';

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
						<FilterIcon
							imgSource='/images/black-owned-icon.png'
							title='Black Owned'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIcon
							imgSource='/images/veteran-owned-icon.png'
							title='Veteran Owned'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIcon
							imgSource='/images/sustainable-packaging-icon.png'
							title='Sustainable Packaging'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIcon
							imgSource='/images/GB-covid-relief-icon.png'
							title='GB Covid Relief'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIcon
							imgSource='/images/GB-animal-welfare-icon.png'
							title='GB Animal Welfare'
						/>
					</div>
				</div>

				<div className='grid justify-items-stretch w-40 h-40 mx-5'>
					<div className='justify-self-center my-auto'>
						<FilterIcon imgSource='/images/LGBT-icon.png' title='LGBTQIA+' />
					</div>
				</div>
			</div>
		</div>
	);
};
