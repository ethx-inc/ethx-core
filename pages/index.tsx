import React from 'react';

const navy = ' Navy ';

console.log(navy);

export const Home = (killer: string): JSX.Element => {
	console.log(killer);

	return (
		<div className='mx-auto w-3/5'>
			<header />
			<div className='font-bold text-7xl text-center'>
				Welcome To ETHX!
			</div>
		</div>
	);
};

export default Home;
