import React, { FC } from 'react';
import {NavBarController} from '../packages/controllers/navbar-controller/NavBarController'
import {MainContentContainer} from '../packages/components/atoms/main-content-container-atom/src'
import {SignInForm} from '../packages/components/molecules/sign-in-form-molecule/src'


export interface SignInProps {
    isSignUp?: boolean,
    
	
}

const SignInPage: FC<SignInProps> = ({isSignUp}: SignInProps) => {

	return (
		<div className='h-screen w-full bg-gray-100'>
			<NavBarController />
			<MainContentContainer css="flex justify-center items-center h-5/6">
				<SignInForm />
			</MainContentContainer>
		</div>
	);
};

export default SignInPage