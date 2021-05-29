import React from 'react';
import { PlusSign } from '../../plus-sign-atom/src';

export interface PDPIngredientProps {
	fontColor?: string;
	productIL?: string;
}

export const PDPIngredient = ({
	fontColor,
	productIL,
}: PDPIngredientProps): JSX.Element => {
	const [sectionOpen, setSectionOpen] = React.useState(false);
	return (
		<div
			className={`text-${fontColor} border-t border-primary w-5/6 lg:w-4/5 my-5 mx-auto lg:mx-0 lg:my-10 px-5`}>
			<div className='flex flex-row justify-between'>
				<h3 className='text-lg italic font-medium my-4'>Ingredients</h3>
				<PlusSign onClick={() => setSectionOpen(!sectionOpen)} />
			</div>

			<div
				className={` ${sectionOpen ? `flex flex-col lg:flex-row` : `hidden`} `}>
				<div className='w-auto'>
					<p className='text-md overflow-clip'>{productIL}</p>
				</div>
			</div>
		</div>
	);
};
