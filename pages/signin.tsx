import React, { FC } from 'react';
import {NavBar} from '../packages/components/organisms/nav-bar-organism/src'
import {MainContentContainer} from '../packages/components/atoms/main-content-container-atom/src'
import {SignInForm} from '../packages/components/molecules/sign-in-form-molecule/src'


export interface SignInProps {
    isSignUp?: boolean,
    
	
}

const SignInPage: FC<SignInProps> = ({

}: SignInProps) => {

	return (
		<div>
			<NavBar />
			<MainContentContainer css="flex justify-center items-center h-screen">
				<SignInForm />
			</MainContentContainer>
		</div>
	);
};

export default SignInPage