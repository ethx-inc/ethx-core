import React, { FC, useContext, useState } from 'react';
import { TextInput } from '../../../atoms/text-input-atom/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';
import { SectionText } from '../../../atoms/section-text/src';
import { NavLink } from '../../../atoms/nav-link-atom/src';

import { LoginContext } from '../../../../services/context/login-context';

export interface SignInFormProps {
	/* Props here */
	onSubmit?;
}

export const SignInForm: FC<SignInFormProps> = ({
	onSubmit,
}: SignInFormProps) => {
	const { loginData, setLoginData } = useContext(LoginContext);
	const { email } = loginData;
	const [password, setPassword] = useState('');

	return (
		<form
			onSubmit={event => onSubmit(event, { email, password })}
			className='flex flex-col h-72 justify-between items-center max-w-2xl w-full'>
			<SectionText title='sign in' />
			<TextInput
				placeholder='email'
				type='email'
				css='mb-3'
				onChange={event =>
					setLoginData({ ...loginData, email: event.target.value })
				}
				required
			/>
			<TextInput
				placeholder='password'
				css='mb-3'
				onChange={event => setPassword(event.target.value)}
				required
			/>
			<SubmitButton title='sign in' css='mb-3' />
			<NavLink label='sign up' href='signup' />
		</form>
	);
};
