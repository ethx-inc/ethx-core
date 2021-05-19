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
				<ButtonBrowse title='hair care' />
			</div>
			<div id='skincare'>
				<ButtonBrowse title='skin care' />
			</div>
			<div id='selfcare'>
				<ButtonBrowse title='self care' />
			</div>
			<div id='suncare'>
				<ButtonBrowse title='sun care' />
			</div>
			<div id='personalcare'>
				<ButtonBrowse title='personal care' />
			</div>
			<div id='bath'>
				<ButtonBrowse title='bath' />
			</div>
			<div id='fragrance'>
				<ButtonBrowse title='fragrance' />
			</div>
			<div id='trending'>
				<ButtonBrowse title='trending' />
			</div>
		</div>
	);
};
