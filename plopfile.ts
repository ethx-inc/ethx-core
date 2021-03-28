import { NodePlopAPI } from 'plop';

import {
    componentGenerator,
    controllerGenerator,
    serviceGenerator,
} from './plop/generators';

const packageSetup = (plop: NodePlopAPI): void => {
	componentGenerator(plop);
	controllerGenerator(plop);
	serviceGenerator(plop);
};

export default packageSetup;
