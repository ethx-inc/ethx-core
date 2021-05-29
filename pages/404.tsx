import React, { FC } from 'react';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';
import { ErrorMessage } from '../packages/components/atoms/error-message-atom/src/ErrorMessage.atom';

export interface ErrorPageProps {

}

const ErrorPage: FC<ErrorPageProps> = ({

}: ErrorPageProps) => {


	return (
		<div className='mx-auto'>
			<NavBarController />
            <ErrorMessage />
		</div>
	);
};

export default ErrorPage