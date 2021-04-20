import React, { useState } from 'react';

// the data we will be storing and manipulating
export type LoginData = {
	fname: string;
	lname: string;
	email: string;
};

export type LoginProps = {
	// access point to the data
	loginData: LoginData;
	// setter for the data
	setLoginData: (login: LoginData) => void;
};

// the created context that can be used elsewhere to gain access to loginData and set it
export const LoginContext = React.createContext<LoginProps>({
	loginData: { fname: '', lname: '', email: '' },
	setLoginData: login => console.warn('no login provider'),
});

export interface LoginProviderProps {
	/* Props here */
	children?;
}

// this is the provider that wraps the outer most element in your ap to provide context access to nested components
export const LoginProvider = ({
	children,
}: LoginProviderProps): JSX.Element => {
	const [loginData, setLoginData] = useState({
		fname: '',
		lname: '',
		email: '',
	});

	return (
		<LoginContext.Provider value={{ loginData, setLoginData }}>
			{children}
		</LoginContext.Provider>
	);
};

/*
export const TestimonialController = ({
	testimonials,
}: TestimonialsSectionProps): JSX.Element => {
	return (
		<TestimonialsSection>
			{testimonials.map(testimony => {
				return <TestimonialQuote key={testimony.id} {...testimony} />;
			})}
		</TestimonialsSection>
	);
}; */
