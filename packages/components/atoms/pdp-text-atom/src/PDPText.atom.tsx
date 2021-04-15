import React from 'react';

export interface PDPTextProps {
	bulletOne?: string;
	bulletTwo?: string;
	bulletThree?: string;
	fontColor?: string;
	productDetails?: string;
	productName?: string;
}

export const PDPText = ({
	bulletOne,
	bulletTwo,
	bulletThree,
	fontColor,
	productDetails,
	productName,
}: PDPTextProps): JSX.Element => {
	return (
		<div
			className={`text-${fontColor} relative lg:w-2/5 mx-5 mt-5 lg:mt-0`}>
			<h3 className={`text-lg mb-2`}>{productName}</h3>
			<ul className={`list-disc text-sm mb-4 ml-10`}>
				<li>{bulletOne}</li>
				<li>{bulletTwo}</li>
				<li>{bulletThree}</li>
			</ul>
			<p>{productDetails}</p>
		</div>
	);
};
