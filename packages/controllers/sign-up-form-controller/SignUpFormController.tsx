import React from 'react';
import { SignUpForm } from '../../components/molecules/sign-up-form-molecule/src';

import {
	auth,
	createUserProfileDoc,
} from '../../services/firebase-auth/firebase.utils';

export const SignUpFormController = (): JSX.Element => {
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
			console.log('created user with email and password', user);
			await createUserProfileDoc(user, { fname, lname });
			// go back to home
			// this.props.history.push('/');
		} catch (e) {
			console.error(e);
			alert('An error occurred, please try again.');
		}
	}

	return (
		<SignUpForm onSubmit={(event, props) => handleSubmit(event, props)} />
	);
};
