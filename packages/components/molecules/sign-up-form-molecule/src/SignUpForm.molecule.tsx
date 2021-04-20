import React, { FC, useContext, useState } from 'react';

import { NavLink } from '../../../atoms/nav-link-atom/src';
import { SectionText } from '../../../atoms/section-text/src';
import { SubmitButton } from '../../../atoms/submit-button-atom/src';
import { TextInput } from '../../../atoms/text-input-atom/src';

import { LoginContext } from '../../../../services/context/login-context';

export interface SignUpFormProps {
	/* Props here */
	onSubmit?;
}

export const SignUpForm: FC<SignUpFormProps> = ({
	onSubmit,
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
			{/* onSubmit={() => onSubmit()} */}
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
				css='mb-3'
				onChange={event =>
					setLoginData({ ...loginData, email: event.target.value })
				}
				required
				value={email}
			/>
			<TextInput
				placeholder='password'
				css='mb-3'
				onChange={event => setPassword(event.target.value)}
				required
				value={password}
			/>
			<TextInput
				placeholder='confirm password'
				css='mb-3'
				onChange={event => setConfirmPassword(event.target.value)}
				required
				value={confirmPassword}
			/>
			<SubmitButton title='sign up' css='mb-3' />
			<NavLink label='sign in' href='signin' />
		</form>
	);
};
