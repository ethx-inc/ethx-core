import React, { FC } from 'react';
import { TextInput } from '../../../atoms/text-input-atom/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';
import { SectionText } from '../../../atoms/section-text/src';

export interface SignInFormProps {
	/* Props here */
}

export const SignInForm: FC = (props: SignInFormProps) => {
	return (
		<form className='flex flex-col h-48 justify-between items-center max-w-2xl'>
			<SectionText title='sign in' />
			<TextInput placeholder='email' />
			<TextInput placeholder='password' />
			<SubmitButton title='sign in' />
		</form>
	);
};
