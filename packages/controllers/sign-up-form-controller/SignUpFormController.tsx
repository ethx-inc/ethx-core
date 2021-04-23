import React from 'react';
import { useRouter } from 'next/router';
import { SignUpForm } from '../../components/molecules/sign-up-form-molecule/src';

import {
	auth,
	createUserProfileDoc,
	signInWithGoogle,
} from '../../services/firebase-auth/firebase.utils';

export const SignUpFormController = (): JSX.Element => {
	const router = useRouter();

	async function handleSubmit(
		event,
		{ fname, lname, email, password, confirmPassword },
	) {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password,
			);
			// not currently working because no db is set up with rules
			await createUserProfileDoc(user, { fname, lname });
			// go back to home
			router.push('/');
		} catch (e) {
			console.error(e);
			alert('An error occurred, please try again.');
		}
	}

	function googleAuth() {
		signInWithGoogle(() => router.push('/'));
	}

	return (
		<SignUpForm
			onSubmit={(event, props) => handleSubmit(event, props)}
			onClickGoogle={() => googleAuth()}
		/>
	);
};
