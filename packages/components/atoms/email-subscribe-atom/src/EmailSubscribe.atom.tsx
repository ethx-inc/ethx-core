import React from 'react';
import { TextInput } from '../../text-input-atom/src';
import { ButtonCTA } from '../../button-cta/src';

export interface EmailSubscribeProps {
	sectionName?: string;
	onClick?;
}

export const EmailSubscribe = ({
	sectionName = 'bobo',
	onClick,
}: EmailSubscribeProps): JSX.Element => {
	const [addEmailAddress, setAddEmailAddress] = React.useState(false);
	return (
		<div className='email-subscribe-section flex flex-col lg:flex-row w-full m-auto'>
				<div className='flex flex-col w-1/2'>
					<img src='/images/ETHX-Header-Mask.jpg'/>
				</div>
				<div className='flex flex-col text-xl w-1/2 py-32'>
					<h3 className='text-primary my-3 w-3/5 mx-auto text-center'>Stay in the loop on all things ethx: new launches, promotions and more! </h3>
					<form
						className={`w-3/5 mx-auto flex flex-col lg:flex-row`}>
						<TextInput
							placeholder='Email Address'
							type='email-address'
							css='mb-2'
						/>
						<div>
						<button
							className='flex flex-row cursor-pointer border-2 border-primary bg-primary text-white rounded-full px-5 py-1 mx-2 text-center'
							type='button'
							onClick={() => setAddEmailAddress(!addEmailAddress)}>
							<p>Submit</p>
						</button>
						</div>
					</form>
				</div>


		</div>
	);
};
