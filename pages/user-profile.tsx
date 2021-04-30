import React, { FC, useState, useEffect } from 'react';
import {NavBarController} from '../packages/controllers/navbar-controller/NavBarController';
import {MainContentContainer} from '../packages/components/atoms/main-content-container-atom/src';
import {NavButton} from '../packages/components/atoms/nav-button-atom/src';

import {ChangeEmailFormController} from '../packages/controllers/change-email-form-controller/ChangeEmailFormController'

import { useRouter } from 'next/router';

import {
	auth,
} from '../packages/services/firebase/firebase.utils';



export interface UserProfileProps {
    isSignUp?: boolean, 
	
}

const UserProflePage: FC<UserProfileProps> = ({isSignUp}: UserProfileProps) => {
    const [revealForm, setRevealForm] = useState(null)
    const router = useRouter();
    const currentUser = auth.currentUser;

    useEffect(() => {
		if (currentUser == null) {
            router.push('/');
        }
	}, [currentUser])

	return (
        <div className='h-screen w-full bg-gray-100'>
            <NavBarController/>
            <MainContentContainer css="flex justify-center items-center h-5/6">
                {revealForm === null ? 
                    <div className='flex flex-col items-center'>
                        <NavButton label='change email' color='white' bgColor='primary' css='mb-2' onClick={() => setRevealForm('email')}/>
                        <NavButton label='change password' color='white' bgColor='primary' onClick={() => setRevealForm('password')}/>
                    </div>
                    : 
                    <ChangeEmailFormController type={revealForm} onGoBack={() => setRevealForm(null)}/>
                }
            </MainContentContainer>
        </div>
	);
};

export default UserProflePage