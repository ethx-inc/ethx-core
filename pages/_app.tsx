import '../styles/globals.css';
import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import {LoginProvider} from '../packages/services/context/login-context';
import { UserProvider } from '../packages/services/context/user-context';

import "regenerator-runtime/runtime";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {

	return (
		<UserProvider>
			<LoginProvider>
				<Component {...pageProps} />
			</LoginProvider>
		</UserProvider>
	);
};


export default MyApp;
