import React from 'react';

export interface ButtonProps {
	title: string;
}

export const Button = ({ title }: ButtonProps): JSX.Element => {
	return <div className='button'>title</div>;
};
