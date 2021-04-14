import React from 'react';
import HomePage from "./home";

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
			<HomePage />
		</div>
	);
};

export default Home;
