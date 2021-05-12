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
			className='flex flex-col h-96 justify-between max-w-2xl w-full lg:border-2 lg:rounded-lg px-8 lg:bg-white'>
			<SectionText title='Sign In' />
			<NavButton
				label='Continue with Google'
				bgColor='primary'
				color='white'
				css='mx-auto my-3 lg:my-0 lg:mb-2'
				onClick={event => onClickGoogle(event)}>
				<FcGoogle className='mx-2' />
			</NavButton>
			<div className='flex justify-center text-primary'>
				<div className='w-10 border-t-2 border-primary mt-3 mx-2'></div><h4>or</h4><div className='w-10 border-t-2 border-primary mt-3 mx-2'></div>
			</div>
			<TextInput
				placeholder='email'
				type='email'
				css='my-3'
				onChange={event =>
					setLoginData({ ...loginData, email: event.target.value })
				}
				required
			/>
			<TextInput
				placeholder='password'
				type='password'
				css='mb-3'
				onChange={event => setPassword(event.target.value)}
				required
			/>

			<div className='flex flex-row justify-between items-center mb-4'>
				<h4 className='underline text-sm text-gray-500 ml-2 lg:-mt-5'>Forgot Password?</h4>
				<SubmitButton title='Sign In' css='w-48' />
			</div>
			<div className='flex flex-row justify-center border-t-2 pt-5 mb-8'><h4 className='text-gray-500'>Don't have an account?</h4><NavLink label='Sign Up' href='signup' css='underline -ml-2'/></div>
		</form>
	);
};
