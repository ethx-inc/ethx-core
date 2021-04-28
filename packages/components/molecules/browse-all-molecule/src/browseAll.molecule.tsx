import React, { FC } from 'react';
import { ButtonBrowse } from '../../../atoms/browse-button-atom/src';


export interface BrowseAllProps {
	/* Props here */
}

export const BrowseAll: FC<BrowseAllProps> = ({

}: BrowseAllProps) => {

	function showCos() {
        if (document.getElementById('makeup')) {
            document.getElementById('browseall').style.display = 'none';
            document.getElementById('browsemakeup').style.display = 'flex';
            document.getElementById('restart').style.display = 'flex';
        }
    }
	return (
		<div id='browseall' className='flex flex-col lg:flex-row'>
			<div id='makeup'><ButtonBrowse title={'makeup'} onClick={() => showCos()}/></div>
			<div id='hair'><ButtonBrowse title={'hair'} /></div>
			<div id='fragrance'><ButtonBrowse title={'fragrance'} /></div>
			<div id='skin'><ButtonBrowse title={'skin'} /></div>
			<div id='shopall'><ButtonBrowse title={'shop all'} /></div>
		</div>
	);
};
