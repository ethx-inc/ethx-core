import React from 'react';
import { PlusSign } from '../../plus-sign-atom/src';
import { TextInput } from '../../text-input-atom/src';
import { ButtonCTA } from '../../button-cta/src';

export interface CheckoutPaymentProps {
	sectionName?: string;
	onClick?;
}

export const CheckoutPayment = ({
	sectionName,
	onClick,
}: CheckoutPaymentProps): JSX.Element => {
	const [addCreditCard, setAddCreditCard] = React.useState(false);
	return (
		<div className='flex flex-col lg:flex-row w-full mt-5'>
			<div className='checkout-details-shipping w-full'>
				<div className='text-xl mb-1'>
					<h3>{sectionName} </h3>
				</div>
				<button
					className='flex flex-row cursor-pointer underline'
					type='button'
					onClick={() => setAddCreditCard(!addCreditCard)}>
					<PlusSign />
					<p>Add New</p>
				</button>
				<form
					className={` ${
						addCreditCard ? 'flex flex-col mt-2 ' : 'hidden'
					} w-full`}>
					<TextInput
						placeholder='Card Number'
						type='credit-card-number'
						css='mb-2'
					/>
					<TextInput
						placeholder='Name On Card'
						type='credit-card-name'
						css='mb-2'
					/>
					<div className='flex flex-col justify-evenly lg:flex-row'>
						<TextInput
							placeholder='CVV'
							type='credit-card-cvv'
							css='mb-2 lg:mb-0 mr-2'
						/>
						<TextInput
							placeholder='Exp. Date'
							type='credit-card-expiration'
							css='mb-2 lg:mb-0'
						/>
					</div>
					<div className='flex justify-center my-5 w-full w-2/3'>
						<ButtonCTA title='Save & Continue' />
					</div>
				</form>
			</div>
		</div>
	);
};
