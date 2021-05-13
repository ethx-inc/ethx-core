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
			className='flex flex-col h-96 justify-between max-w-2xl w-full lg:border-2 lg:rounded-lg px-8 lg:bg-white'>
			<SectionText title='Sign Up' />
			<NavButton
				label='Continue with Google'
				bgColor='primary'
				color='white'
				css='mx-auto my-3 lg:my-0 lg:mb-2'
				onClick={event => onClickGoogle(event)}>
				<FcGoogle className='mx-2' />
			</NavButton>
			<div className='flex justify-center text-primary'>
				<div className='w-10 border-t-2 border-primary my-3 mx-2' />
				<h4>or</h4>
				<div className='w-10 border-t-2 border-primary mt-3 mx-2' />
			</div>
			<div className='flex flex-row justify-center my-3'>
				<TextInput
					placeholder='first name'
					css='mr-2'
					onChange={event =>
						setLoginData({
							...loginData,
							fname: event.target.value,
						})
					}
					required
					value={fname}
				/>
				<TextInput
					placeholder='last name'
					css=''
					onChange={event =>
						setLoginData({
							...loginData,
							lname: event.target.value,
						})
					}
					required
					value={lname}
				/>
			</div>
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
			<div className='flex flex-row justify-center mb-3'>
				<TextInput
					placeholder='password'
					type='password'
					css='mr-2'
					onChange={event => setPassword(event.target.value)}
					required
					value={password}
				/>
				<TextInput
					placeholder='confirm password'
					type='password'
					css=''
					onChange={event => setConfirmPassword(event.target.value)}
					required
					value={confirmPassword}
				/>
			</div>
			<div className='flex flex-row justify-between mb-10 mt-3'>
				<div className='flex flex-col lg:flex-row mb-2 lg:-mt-4 ml-2'>
					<h3 className='text-gray-500 text-sm'>
						Already have an account?
					</h3>
					<NavLink
						label='Sign In'
						href='signin'
						css='underline text-sm -ml-4 lg:-ml-2'
					/>
				</div>
				<SubmitButton title='Sign Up' css='w-48 mb-3' />
			</div>
		</form>
	);
};
