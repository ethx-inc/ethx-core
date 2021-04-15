import React, { FC } from 'react';
import { PDPImage } from '../../../atoms/pdp-image-atom/src';
import { PDPText } from '../../../atoms/pdp-text-atom/src';
import { PDPAbout } from '../../../atoms/pdp-about-atom/src';
import { ButtonCTA } from '../../../atoms/button-cta/src'


export interface PDPMoleculeProps {
	brandDetails?;
	bulletOne?;
	bulletTwo?;
	bulletThree?;
	fontColor?;
	productDetails?;
	productName?;
	/* Props here */
}

export const PDPMolecule: FC<PDPMoleculeProps> = ({
	fontColor,
	brandDetails

}: PDPMoleculeProps) => {
	return (
		<div >
			<div className='flex flex-col lg:flex-row lg:flex-start lg:mt-10 mb-3 lg:mb-10'>
				<PDPImage />
				<PDPText bulletOne={'short form product info'} bulletTwo={'short form product info'} bulletThree={'short form product info'} fontColor={'gray-500'} productName={'Brightening Moisturizer'} productDetails={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus tellus sit amet ligula pretium, quis consectetur dui euismod. Pellentesque efficitur eleifend vehicula. Vivamus vulputate leo vitae libero tempor, sed molestie augue pretium. Morbi semper, justo et tincidunt sagittis, magna metus euismod ipsum, at congue odio leo ac dolor.'} />
				
			</div>
			<div className='flex relative justify-center lg:right-40 lg:bottom-10'> <ButtonCTA title={'add to cart'}/> </div>
			<div>
				<PDPAbout fontColor={'gray-500'} brandDetails={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus tellus sit amet ligula pretium, quis consectetur dui euismod. Pellentesque efficitur eleifend vehicula. Vivamus vulputate leo vitae libero tempor, sed molestie augue pretium. Morbi semper, justo et tincidunt sagittis, magna metus euismod ipsum, at congue odio leo ac dolor. Cras ut lobortis tellus. Aenean massa tortor, finibus ac tristique sed, auctor ac mi. Donec quis placerat lacus. Donec placerat elementum leo, et feugiat orci euismod at. Maecenas sed gravida nunc. Sed sed nibh tellus. Mauris vulputate, ex convallis tempus consectetur, augue erat euismod mi, in vestibulum ex leo id ligula. Duis dictum euismod leo eleifend laoreet. Nunc finibus turpis leo, a semper quam pellentesque eget.'}/>
			</div>
			<div className='mb-10 flex relative justify-center lg:justify-start'> <ButtonCTA title={'shop all'} color={'gray-50'} fontColor={'primary'}/> </div>
		</div>
	);
};
