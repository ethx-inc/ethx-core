import React, { FC, useState, useEffect, useContext } from 'react';
import {NavBarController} from '../packages/controllers/navbar-controller/NavBarController';
import {MainContentContainer} from '../packages/components/atoms/main-content-container-atom/src';
import {NavButton} from '../packages/components/atoms/nav-button-atom/src';
import {Download} from '../packages/components/atoms/download-atom/src';

import {ChangeEmailFormController} from '../packages/controllers/change-email-form-controller/ChangeEmailFormController'

import { onboardVendor, shippoOnboarding } from  '../packages/services/firebase/firebase.utils';

import { useRouter } from 'next/router';

import {
	auth,
} from '../packages/services/firebase/firebase.utils';

import {UserContext} from '../packages/services/context/user-context';
import { getRouteMatcher } from 'next/dist/next-server/lib/router/utils';



export interface UserProfileProps {
    isSignUp?: boolean,
    userName?: string; 
	
}

const UserProflePage: FC<UserProfileProps> = ({isSignUp, userName}: UserProfileProps) => {
    const [revealForm, setRevealForm] = useState(null)
    const router = useRouter();
    const currentUser = auth.currentUser;
    const {userData} = useContext(UserContext);

    useEffect(() => {
		if (currentUser == null) {
            router.push('/');
        }
	}, [currentUser])


	return (
        <div className='h-screen w-full bg-gray-100'>
            <NavBarController/>
            <MainContentContainer css="flex justify-center">
                {revealForm === null ? 
                    <div className='flex flex-col lg:rounded-lg lg:bg-white lg:border-2 lg:h-80 lg:w-3/5 lg:mt-12'>
                        <div className='flex flex-col lg:flex-row lg:justify-center lg:mt-14'>
                            <div className='hidden border-2 border-dashed h-52 w-72 text-xs mt-2 lg:mt-0 pt-20 bg-white'>
                                <h3 className='text-sm text-center font-medium'>Upload Image</h3>
                                <div className='text-center'><Download /></div>
                            </div>
                            <div className='mt-10 lg:mt-0 lg:mx-5'>
                                <div className='flex flex-row border-b-2 pb-2 my-2 lg:w-72 w-full font-lg font-light'><h3 className=''>Welcome </h3><h3 className='capitalize ml-1'>{userData.fname}</h3></div>
                                <div className='font-light italic text-sm mb-4'><h3>Thanks for shopping ethically!</h3></div>
                                <div className='flex flex-col align-center'>
                                    <NavButton label='change email' color='white' bgColor='primary' css='mb-3' onClick={() => setRevealForm('email')}/>
                                    <NavButton label='change password' color='white' bgColor='primary' css='mb-3' onClick={() => setRevealForm('password')}/>
                                    {userData.isVendor ? 
                                    <NavButton 
                                        label='become a seller' 
                                        color='white' 
                                        bgColor='primary' 
                                        onClick={() => onboardVendor().then(obj => router.push(obj.data.url))}
                                    /> : 
                                    null}
                                    {userData.isVendor ? 
                                    <NavButton 
                                        label='set up' 
                                        color='white' 
                                        bgColor='primary' 
                                        onClick={() => router.push(`https://goshippo.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=*&state=${userData.uid}`)}
                                    /> : 
                                    null}
                                </div>
                            </div>
                        </div>
                    </div>
                    : 
                    <ChangeEmailFormController type={revealForm} onGoBack={() => setRevealForm(null)}/>
                }
            </MainContentContainer>
        </div>
	);
};

//                                        onClick={() => router.push(`https://goshippo.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=*&state=${userData.uid}`)}

export default UserProflePage