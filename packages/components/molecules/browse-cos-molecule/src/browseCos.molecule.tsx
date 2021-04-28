import React, { FC } from 'react';
import { ButtonBrowse } from '../../../atoms/browse-button-atom/src';


export interface BrowseCosProps {
	/* Props here */
}

export const BrowseCos: FC<BrowseCosProps> = ({

}: BrowseCosProps) => {

	return (
		<div id='browsemakeup' className='hidden flex flex-col lg:flex-row'>
			<div id='eye'><ButtonBrowse title={'eye'} /></div>
			<div id='face'><ButtonBrowse title={'face'} /></div>
			<div id='lip'><ButtonBrowse title={'lip'} /></div>
			<div id='remover'><ButtonBrowse title={'makeup remover'} /></div>
		</div>
	);
};
