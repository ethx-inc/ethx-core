import React, { FC } from 'react';
import { TextInput } from '../../../atoms/text-input-atom/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';
import { SectionText } from '../../../atoms/section-text/src';
import { NavLink } from '../../../atoms/nav-link-atom/src';

export interface SignInFormProps {
	/* Props here */
	onSubmit?;
	onEmailChange?;
	onPasswordChange?;
}

export const SignInForm: FC<SignInFormProps> = ({
	onSubmit,
	onEmailChange,
	onPasswordChange,
}: SignInFormProps) => {
	return (
		<form
			onSubmit={() => onSubmit()}
			className='flex flex-col h-72 justify-between items-center max-w-2xl w-full'>
			<SectionText title='sign in' />
			<TextInput
				placeholder='email'
				css='mb-3'
				onChange={() => onEmailChange()}
				required
			/>
			<TextInput
				placeholder='password'
				css='mb-3'
				onChange={() => onPasswordChange()}
				required
			/>
			<SubmitButton title='sign in' css='mb-3' />
			<NavLink label='sign up' href='signup' />
		</form>
	);
};
