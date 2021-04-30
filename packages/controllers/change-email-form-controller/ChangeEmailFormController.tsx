import React, { FC } from 'react';
import { ChangeEmailForm } from '../../components/molecules/change-email-form-molecule/src';

import {
	auth,
	changePassword,
	updateEmail,
} from '../../services/firebase/firebase.utils';

export interface ChangeEmailFormControllerProps {
	/* Props here */
	type: string;
	onGoBack;
}

export const ChangeEmailFormController: FC<ChangeEmailFormControllerProps> = ({
	type,
	onGoBack,
}: ChangeEmailFormControllerProps) => {
	async function handleSubmit(event, { field, confirmField }) {
		event.preventDefault();
		const { currentUser } = auth;
		const { providerId } = currentUser.providerData[0];

		if (field !== confirmField) {
			alert(`${type}s don't match`);
			return;
		}

		if (type === 'email') {
			updateEmail(field, onGoBack);
		}
		if (type === 'password') {
			if (providerId !== 'google.com') {
				changePassword(field, onGoBack);
			} else {
				alert('Signed in with Google password cannot be changed');
			}
		}
	}

	return (
		<ChangeEmailForm
			title={type}
			onSubmit={(event, props) => handleSubmit(event, props)}
			onGoBack={() => onGoBack()}
		/>
	);
};
