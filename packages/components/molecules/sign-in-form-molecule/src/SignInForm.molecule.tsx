import React, { FC } from 'react';
import { TextInput } from '../../../atoms/text-input-atom/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';

export interface SignInFormProps {
	/* Props here */
}

export const SignInForm: FC = (props: SignInFormProps) => {
	return (
		<form className='flex flex-col h-32 justify-between items-end max-w-2xl'>
			<TextInput placeholder='email' />
			<TextInput placeholder='password' />
			<SubmitButton title='sign in' css='max-w-md' />
		</form>
	);
};
