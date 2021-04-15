import React, { FC, useContext } from 'react';

import { LoginContext } from '../../../../../context/login-context';
import {
	auth,
	createUserProfileDoc,
} from '../../../../../firebase/firebase.utils';
import { NavLink } from '../../../atoms/nav-link-atom/src';
import { SectionText } from '../../../atoms/section-text/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';
import { TextInput } from '../../../atoms/text-input-atom/src';

export interface SignUpFormProps {
	/* Props here */
	onSubmit?;
	onFNameChange?;
	onLNameChange?;
	onEmailChange?;
	onPasswordChange?;
	onConfirmPasswordChange?;
}

export const SignUpForm: FC<SignUpFormProps> = ({
	onSubmit,
	onFNameChange,
	onLNameChange,
	onEmailChange,
	onPasswordChange,
	onConfirmPasswordChange,
}: SignUpFormProps) => {
	const { loginData, setLoginData } = useContext(LoginContext);
	const { FName, LName, email, password, confirmPassword } = loginData;

	async function handleSubmit(event) {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password,
			);

			await createUserProfileDoc(user, { FName, LName });
			// go back to home
			// this.props.history.push('/');
		} catch (e) {
			console.error(e);
			alert('An error occurred, please try again.');
		}
	}

	return (
		<form
			onSubmit={event => handleSubmit(event)}
			className='flex flex-col h-3/5 justify-between items-center max-w-2xl w-full '>
			{/* onSubmit={() => onSubmit()} */}
			<SectionText title='sign up' />
			<TextInput
				placeholder='first name'
				css='mb-3'
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setLoginData({ ...loginData, FName: event.target.value })
				}
				required
			/>
			{/* onChange={() => onFNameChange()} */}
			<TextInput
				placeholder='last name'
				css='mb-3'
				onChange={() => onLNameChange()}
				required
			/>
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
			<TextInput
				placeholder='confirm password'
				css='mb-3'
				onChange={() => onConfirmPasswordChange()}
				required
			/>
			<SubmitButton title='sign up' css='mb-3' />
			<NavLink label='sign in' href='signin' />
		</form>
	);
};
