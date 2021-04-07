import React from 'react';
import {HomePage} from "./home";
import {NavBar} from '../packages/components/organisms/nav-bar-organism/src'

export interface HomeProps {
	color?: string;
	fontColor?: string;
	title?: string;
	subtitle?: string;
}
export const Home = (
	color,
	fontColor,
	title,
	subtitle

): JSX.Element => {
  
	return (
		<div>
			<NavBar />
			<HomePage />
		</div>
	);
};

export default Home;
