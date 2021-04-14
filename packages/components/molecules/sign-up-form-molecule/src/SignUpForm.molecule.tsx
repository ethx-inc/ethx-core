import React, { FC } from 'react';
import { TextInput } from '../../../atoms/text-input-atom/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';
import { SectionText } from '../../../atoms/section-text/src';
import { NavLink } from '../../../atoms/nav-link-atom/src';

export interface SignUpFormProps {
	/* Props here */
	onSubmit?;
	onFNameChange?;
	onLNameChange;
	onEmailChange;
	onPasswordChange;
}

export const SignUpForm: FC<SignUpFormProps> = ({
	onSubmit,
	onFNameChange,
	onLNameChange,
	onEmailChange,
	onPasswordChange,
}: SignUpFormProps) => {
	return (
		<form
			onSubmit={() => onSubmit()}
			className='flex flex-col h-96 justify-between items-center max-w-2xl w-full '>
			<SectionText title='sign up' />
			<TextInput
				placeholder='first name'
				css='mb-2'
				onChange={() => onFNameChange()}
				required
			/>
			<TextInput
				placeholder='last name'
				css='mb-2'
				onChange={() => onLNameChange()}
				required
			/>
			<TextInput
				placeholder='email'
				css='mb-2'
				onChange={() => onEmailChange()}
				required
			/>
			<TextInput
				placeholder='password'
				css='mb-2'
				onChange={() => onPasswordChange()}
				required
			/>
			<SubmitButton title='sign up' css='mb-2' />
			<NavLink label='sign in' href='signin' />
		</form>
	);
};
