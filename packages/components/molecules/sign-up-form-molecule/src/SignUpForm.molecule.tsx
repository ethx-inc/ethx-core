import React, { FC, useContext, useState } from 'react';

import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { NavLink } from '../../../atoms/nav-link-atom/src';
import { SectionText } from '../../../atoms/section-text/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';
import { NavButton } from '../../../atoms/nav-button-atom/src/NavButton.atom';
import { TextInput } from '../../../atoms/text-input-atom/src';

import { LoginContext } from '../../../../services/context/login-context';

export interface SignUpFormProps {
	/* Props here */
	onSubmit?;
	onClickGoogle?;
}

export const SignUpForm: FC<SignUpFormProps> = ({
	onSubmit,
	onClickGoogle,
}: SignUpFormProps) => {
	const { loginData, setLoginData } = useContext(LoginContext);
	const { fname, lname, email } = loginData;
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<form
			onSubmit={event =>
				onSubmit(event, {
					fname,
					lname,
					email,
					password,
					confirmPassword,
				})
			}
			className='flex flex-col h-3/5 justify-between items-center max-w-2xl w-full '>
			<SectionText title='sign up' />
			<TextInput
				placeholder='first name'
				css='mb-3'
				onChange={event =>
					setLoginData({ ...loginData, fname: event.target.value })
				}
				required
				value={fname}
			/>
			<TextInput
				placeholder='last name'
				css='mb-3'
				onChange={event =>
					setLoginData({ ...loginData, lname: event.target.value })
				}
				required
				value={lname}
			/>
			<TextInput
				placeholder='email'
				type='email'
				css='mb-3'
				onChange={event =>
					setLoginData({ ...loginData, email: event.target.value })
				}
				required
				value={email}
			/>
			<TextInput
				placeholder='password'
				type='password'
				css='mb-3'
				onChange={event => setPassword(event.target.value)}
				required
				value={password}
			/>
			<TextInput
				placeholder='confirm password'
				type='password'
				css='mb-3'
				onChange={event => setConfirmPassword(event.target.value)}
				required
				value={confirmPassword}
			/>
			<SubmitButton title='sign up' css='mb-3' />
			<NavButton
				label='sign up'
				bgColor='primary'
				color='white'
				css='mb-2'
				onClick={event => onClickGoogle(event)}>
				<FcGoogle className='md:mt-1.5 mt-1 mr-1 text-lg' />
			</NavButton>
			<NavLink label='sign in' href='signin' />
		</form>
	);
};
