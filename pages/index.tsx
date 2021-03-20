import React from 'react';

import { Button } from '../packages/components/atoms/button-atom/src';

export const Home = (): JSX.Element => {
	return (
		<div className='mx-auto w-3/5'>
			<header />
			<div className='font-bold text-7xl text-center'>
				Welcome To ETHX!
			</div>
			<Button title='Click Me' />
		</div>
	);
};

export default Home;
