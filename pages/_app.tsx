import '../styles/globals.css';
import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return <Component {...pageProps} />;
};

export default MyApp;
