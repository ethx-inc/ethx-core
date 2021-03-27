import { NodePlopAPI, Plop } from 'plop';
import {
	serviceGenerator,
	controllerGenerator,
	componentGenerator,
} from './plop/generators';

const packageSetup = (plop: NodePlopAPI): void => {
	componentGenerator(plop);
	controllerGenerator(plop);
	serviceGenerator(plop);
};

export default packageSetup;
