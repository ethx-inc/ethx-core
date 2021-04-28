import React, { FC} from 'react';
import {NavBarController} from '../packages/controllers/navbar-controller/NavBarController';
import {MainContentContainer} from '../packages/components/atoms/main-content-container-atom/src';
import {SignUpFormController} from '../packages/controllers/sign-up-form-controller/SignUpFormController';


export interface SignUpProps {
    isSignUp?: boolean,
    
	
}

const SignUpPage: FC<SignUpProps> = ({isSignUp}: SignUpProps) => {

	return (
        <div className='h-screen w-full bg-gray-100'>
            <NavBarController/>
            <MainContentContainer css="flex justify-center items-center h-5/6">
                <SignUpFormController />
            </MainContentContainer>
        </div>
	);
};

export default SignUpPage