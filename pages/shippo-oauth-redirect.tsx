import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { FC } from 'react';

import { HeroText } from '../packages/components/atoms/hero-text/src';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';

const ShippoOnboardingSuccess: FC = () => {
	const router = useRouter();
	const {
		code,
		state,
		error,
		error_description: errorDescription,
	}: ParsedUrlQuery = router.query;

	// TODO:check if state and users uuid match
	console.log(code);
	console.log(state);
	console.log(errorDescription);

	!error
		? /* getUserShippoUserCredentials && addUserShippoUserCredentialsToAccount */ console.log(
				'do work to add shippo credentials to account',
		  )
		: null;

	return (
		<div>
			<NavBarController />
			<HeroText
				fontColor='primary'
				subtitle='Launching Summer 2021'
				title={
					!error ? 'Onboarding successful!' : 'Sorry, something went wrong'
				}
			/>
			{/* Give retry button to try to connect with shippo again */}
		</div>
	);
};

export default ShippoOnboardingSuccess;
