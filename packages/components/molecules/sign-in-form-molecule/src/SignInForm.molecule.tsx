import React, { FC } from 'react';
import { TextInput } from '../../../atoms/text-input-atom/src';

export interface SignInFormProps {
	/* Props here */
}

export const SignInForm: FC = (props: SignInFormProps) => {
	return (
		<form>
			<TextInput placeholder='email' />
			<TextInput placeholder='password' />
		</form>
	);
};
