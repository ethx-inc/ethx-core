import React from 'react';
import { TextInput } from '../../text-input-atom/src';
import { ButtonCTA } from '../../button-cta/src';
import { Download } from '../../download-atom/src';

export interface AddProductProps {
	onClick?;
}

export const AddProduct = ({
	onClick,
}: AddProductProps): JSX.Element => {
	const [addVariant, setAddVariant] = React.useState(false);
	return (
		<div className='flex flex-col lg:flex-row lg:mt-5 m-auto lg:border-2 lg:rounded-lg p-8 lg:w-3/5'>
			<div className='add-product-modal w-full'>
				<form
					className={``}>
					<TextInput
						placeholder='Product Name'
						type='product-name'
						css='mb-2'
					/>
					<TextInput
						placeholder='Product Description'
						type='product-description'
						css='mb-2'
					/>
						<TextInput
							placeholder='Ingredients'
							type='product-ingredients'
							css='mb-2'
						/>
						<div className='flex flex-col lg:flex-row lg:gap-x-2 mx-auto mb-4'>
						<TextInput
							placeholder='Price'
							type='product-price'
							css='mb-2'
						/>
						<TextInput
							placeholder='Size'
							type='product-size'
							css='mb-2'
						/>
						<TextInput
							placeholder='Color'
							type='product-color'
							css='mb-2'
						/>
						<TextInput
							placeholder='Scent'
							type='product-scent'
							css='mb-2'
						/>
						</div>
						<div className='flex justify-end -mt-4 mb-6'>
							<h3 className='underline text-gray-600 text-sm'>Add Another Variant</h3>
						</div>
						<div className='flex flex-col lg:flex-row'>
							<div className='border-2 border-dashed h-52 w-72 text-xs my-2 pt-20 bg-white'>
									<h3 className='text-sm text-center font-medium'>Upload Image</h3>
									<div className='text-center'><Download /></div>
							</div>
							<div className='mx-auto'>
								<h3 className='mx-auto text-gray-600 text-center'>Upload Up To 5 Images</h3>
								<div className='flex flex-row gap-x-3'>
									<div className='border-2 border-dashed h-20 w-20 text-xs my-2 pt-20 bg-white'></div>
									<div className='border-2 border-dashed h-20 w-20 text-xs my-2 pt-20 bg-white'></div>
									<div className='border-2 border-dashed h-20 w-20 text-xs my-2 pt-20 bg-white'></div>
								</div>
								<div className='flex flex-row gap-x-3'>
									<div className='border-2 border-dashed h-20 w-20 text-xs my-2 pt-20 bg-white'></div>
									<div className='border-2 border-dashed h-20 w-20 text-xs my-2 pt-20 bg-white'></div>								</div>
							</div>
						</div>
					<div className='flex justify-center mt-6 w-full lg:w-2/3 mx-auto'>
						<ButtonCTA title='Save and Continue' />
					</div>
				</form>
			</div>
		</div>
	);
};
