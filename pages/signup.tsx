import React, { FC } from 'react';
import {NavBar} from '../packages/components/organisms/nav-bar-organism/src'
import {MainContentContainer} from '../packages/components/atoms/main-content-container-atom/src'
import {SignUpForm} from '../packages/components/molecules/sign-up-form-molecule/src'


export interface SignUpProps {
    isSignUp?: boolean,
    
	
}

const SignUpPage: FC<SignUpProps> = ({

}: SignUpProps) => {

	return (
        <div className='h-screen w-full bg-gray-100'>
            <NavBar/>
            <MainContentContainer css="flex justify-center items-center h-5/6">
                <SignUpForm />
            </MainContentContainer>
        </div>
	);
};

export default SignUpPage