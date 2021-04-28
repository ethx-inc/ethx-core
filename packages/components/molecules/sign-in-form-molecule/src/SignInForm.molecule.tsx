import React, { FC, useContext, useState } from 'react';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { TextInput } from '../../../atoms/text-input-atom/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';
import { NavButton } from '../../../atoms/nav-button-atom/src/NavButton.atom';
import { SectionText } from '../../../atoms/section-text/src';
import { NavLink } from '../../../atoms/nav-link-atom/src';

import { LoginContext } from '../../../../services/context/login-context';

export interface SignInFormProps {
	/* Props here */
	onSubmit?;
	onClickGoogle?;
}

export const SignInForm: FC<SignInFormProps> = ({
	onSubmit,
	onClickGoogle,
}: SignInFormProps) => {
	const { loginData, setLoginData } = useContext(LoginContext);
	const { email } = loginData;
	const [password, setPassword] = useState('');

	return (
		<form
			onSubmit={event => onSubmit(event, { email, password })}
			className='flex flex-col h-80 justify-between items-center max-w-2xl w-full'>
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
			<SubmitButton title='sign in' css='mb-2' />
			<NavButton
				label='sign in'
				bgColor='primary'
				color='white'
				css='mb-2'
				onClick={event => onClickGoogle(event)}>
				<FcGoogle className='md:mt-1.5 mt-1 mr-1 text-lg' />
			</NavButton>
			<NavLink label='sign up' href='signup' />
		</form>
	);
};
