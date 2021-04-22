import React from 'react';
import { useRouter } from 'next/router';
import { SignInForm } from '../../components/molecules/sign-in-form-molecule/src';

import { auth } from '../../services/firebase-auth/firebase.utils';

export const SignInFormController = (): JSX.Element => {
	const router = useRouter();

	async function handleSubmit(event, { email, password }) {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			// redirect to home
			router.push('/');
		} catch (e) {
			console.error(e);
			alert('An error occurred, please try again.');
		}
	}

	return (
		<SignInForm onSubmit={(event, props) => handleSubmit(event, props)} />
	);
};
