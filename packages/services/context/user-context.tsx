import React, { useState } from 'react';

// the data we will be storing and manipulating
export type UserData = {
	fname: string;
	lname: string;
	email: string;
	uid: string;
	isVendor: boolean;
};

export type UserProps = {
	// access point to the data
	userData: UserData;
	// setter for the data
	setUserData: (user: UserData) => void;
};

// the created context that can be used elsewhere to gain access to loginData and set it
export const UserContext = React.createContext<UserProps>({
	userData: { fname: '', lname: '', email: '', uid: '', isVendor: false },
	setUserData: user => console.warn('no user provider'),
});

export interface UserProviderProps {
	/* Props here */
	children?;
}

// this is the provider that wraps the outer most element in your ap to provide context access to nested components
export const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
	const [userData, setUserData] = useState({
		fname: '',
		lname: '',
		email: '',
		uid: '',
		isVendor: false,
	});

	return (
		<UserContext.Provider value={{ userData, setUserData }}>
			{children}
		</UserContext.Provider>
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
