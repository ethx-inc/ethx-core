import React, { FC } from 'react';
import { ButtonBrowse } from '../../../atoms/browse-button-atom/src';

export interface BrowseAllProps {
	/* Props here */
	browse?;
	onClick?;
}

export const BrowseAll: FC<BrowseAllProps> = ({
	browse,
	onClick,
}: BrowseAllProps) => {
	function showCos() {
		if (document.getElementById('makeup')) {
			document.getElementById('browseall').style.display = 'none';
			document.getElementById('browsemakeup').style.display = 'flex';
			document.getElementById('restart').style.display = 'flex';
		}
	}
	return (
		<div id='browseall' className='grid grid-cols-2 lg:grid-cols-3 m-auto'>
			<div id='makeup'>
				<ButtonBrowse
					title='makeup'
					onClick={() => onClick('makeup')}
				/>
			</div>
			<div id='haircare'>
				<ButtonBrowse
					title='hair care'
					onClick={() => onClick('hair care')}
				/>
			</div>
			<div id='skincare'>
				<ButtonBrowse
					title='skin care'
					onClick={() => onClick('skin care')}
				/>
			</div>
			<div id='selfcare'>
				<ButtonBrowse
					title='self care'
					onClick={() => onClick('self care')}
				/>
			</div>
			<div id='suncare'>
				<ButtonBrowse
					title='sun care'
					onClick={() => onClick('sun care')}
				/>
			</div>
			<div id='personalcare'>
				<ButtonBrowse
					title='personal care'
					onClick={() => onClick('personal care')}
				/>
			</div>
			<div id='bath'>
				<ButtonBrowse title='bath' onClick={() => onClick('bath')} />
			</div>
			<div id='fragrance'>
				<ButtonBrowse
					title='fragrance'
					onClick={() => onClick('fragrance')}
				/>
			</div>
			{/* <div id='trending'>
				<ButtonBrowse 
					title='trending' 
					onClick={() => onClick('trending')}
				/>
			</div> */}
		</div>
	);
};
