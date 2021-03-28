import { NodePlopAPI, PlopGenerator } from 'plop';

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
import {
    atomPrompt,
    componentPrompt,
    controllerPrompt,
    moleculePrompt,
    organismPrompt,
    pagePrompt,
    servicePrompt,
    templatePrompt,
} from './prompts';

export const atomGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('atom', {
		description: 'generate a atom',
		prompts: [atomPrompt],
		actions: [atomAction],
	});

export const organismGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('organism', {
		description: 'generate a organism',
		prompts: [organismPrompt],
		actions: [organismAction],
	});

export const moleculeGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('molecule', {
		description: 'generate a molecule',
		prompts: [moleculePrompt],
		actions: [moleculeAction],
	});

export const templateGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('template', {
		description: 'generate a template',
		prompts: [templatePrompt],
		actions: [templateAction],
	});

export const pageGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('Page', {
		description: 'generate a page',
		prompts: [pagePrompt],
		actions: [pageAction],
	});

export const componentGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('Component', {
		description: 'generate a component, an ui element',
		prompts: [componentPrompt],
		actions: [generalComponentAction],
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
