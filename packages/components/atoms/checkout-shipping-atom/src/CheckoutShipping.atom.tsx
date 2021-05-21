import React from 'react';
import { PlusSign } from '../../plus-sign-atom/src';
import { TextInput } from '../../text-input-atom/src';
import { ButtonCTA } from '../../button-cta/src';

export interface CheckoutShippingProps {
	sectionName?: string;
	onClick?;
}

export const CheckoutShipping = ({
	sectionName,
	onClick,
}: CheckoutShippingProps): JSX.Element => {
	const [addAddress, setAddAddress] = React.useState(false);
	return (
		<div className='flex flex-col lg:flex-row w-full mt-5'>
			<div className='checkout-details-shipping w-full'>
				<div className='text-xl mb-1'>
					<h3>{sectionName} </h3>
				</div>
				<button
					className='flex flex-row cursor-pointer underline'
					type='button'
					onClick={() => setAddAddress(!addAddress)}>
					<PlusSign />
					<p>Add New</p>
				</button>
				<form className={` ${addAddress ? 'flex flex-col' : 'hidden'} w-full`}>
					<div className='flex flex-col lg:flex-row my-2'>
						<TextInput
							placeholder='First Name'
							type='first-name'
							css='mb-2 lg:mb-0 mr-2'
						/>
						<TextInput placeholder='Last Name' type='last-name' css='' />
					</div>
					<div className=''>
						<TextInput
							placeholder='Phone Number'
							type='phone-number'
							css='mb-2 mr-2'
						/>
					</div>
					<TextInput
						placeholder='Street Address'
						type='street-address'
						css='mb-2'
					/>
					<TextInput
						placeholder='Apt #, Floor, etc.'
						type='apt-number-etc'
						css='mb-2'
					/>
					<div className='flex flex-col justify-evenly lg:flex-row'>
						<TextInput
							placeholder='Zip Code'
							type='zip-code'
							css='mb-2 lg:mb-0 mr-2'
						/>
						<TextInput placeholder='City' type='city' css='mb-2 lg:mb-0 mr-2' />
						<TextInput placeholder='State' type='state' css='' />
					</div>
					<div className='flex justify-center my-5 w-full w-2/3'>
						<ButtonCTA title='Save & Continue' />
					</div>
				</form>
			</div>
		</div>
	);
};
