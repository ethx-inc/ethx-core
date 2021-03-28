import { NodePlopAPI, PlopGenerator } from 'plop';
import { componentPrompt, controllerPrompt, servicePrompt } from './prompts';

import {
	atomAction,
	controllerAction,
	generalComponentAction,
	moleculeAction,
	organismAction,
	pageAction,
	serviceAction,
	templateAction,
} from './actions';

export const componentGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('Component', {
		description: 'generate a component, an ui element',
		prompts: componentPrompt as [],
		actions: data => {
			let actions = [];
			switch (data.componentType) {
				case 'Atom':
					actions = actions.concat(generalComponentAction);
					console.log(data.componentType, data.componentName);
					break;
				case 'Molecule':
					actions = actions.concat(generalComponentAction);
					console.log(data.componentType, data.componentName);
					break;
				case 'Organism':
					actions = actions.concat(generalComponentAction);
					console.log(data.componentType, data.componentName);
					break;
				case 'Template':
					actions = actions.concat(generalComponentAction);
					console.log(data.componentType, data.componentName);
					break;
				case 'Page':
					actions = actions.concat(generalComponentAction);
					console.log(data.componentType, data.componentName);
					break;

				default:
					break;
			}
			// console.log(actions);
			return actions;
		},
	});
export const controllerGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('Controller', {
		description:
			'generate a controller, a logical element that gives components brains',
		prompts: [controllerPrompt],
		actions: [controllerAction],
	});

export const serviceGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('Service', {
		description:
			'generate a service, logic that should be shared throughout the application',
		prompts: [servicePrompt],
		actions: [serviceAction],
	});
