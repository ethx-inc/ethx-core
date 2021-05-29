import React, { FC } from 'react';

import { MainContentContainer } from '../packages/components/atoms/main-content-container-atom/src';
import { MixedSectionText } from '../packages/components/atoms/mixed-section-text/src';
import { BrowseAllController } from '../packages/controllers/browse-all-controller/BrowseAllController';
import { NavBarController } from '../packages/controllers/navbar-controller/NavBarController';

const Shop: FC = () => {
	return (
		<div>
			<NavBarController />
			<MainContentContainer css='flex flex-col items-center h-5/6 mt-10'>
				<MixedSectionText
					css='mixedtext'
					title='browse'
					subtitle='all products'
				/>
				<BrowseAllController />
			</MainContentContainer>
		</div>
	);
};

export default Shop;
