import React from 'react';

interface ButtonProps {
	title: string;
}

export const Button = ({ title }: ButtonProps): JSX.Element => {
	return <div className='button'>title</div>;
};
