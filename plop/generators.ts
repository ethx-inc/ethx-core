import { PlopGeneratorConfig } from 'node-plop';
import { NodePlopAPI, PlopGenerator } from 'plop';

import {
    atomAction,
    controllerAction,
    moleculeAction,
    organismAction,
    pageAction,
    serviceAction,
    templateAction,
} from './actions';
import {
    atomPrompt,
    controllerPrompt,
    moleculePrompt,
    organismPrompt,
    pagePrompt,
    servicePrompt,
    templatePrompt,
} from './prompts';

export const atomGenerator = (plop: NodePlopAPI): PlopGeneratorConfig =>
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
	plop.setGenerator('page', {
		description: 'generate a page',
		prompts: [pagePrompt],
		actions: [pageAction],
	});

export const controllerGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('controller', {
		description: 'generate a controller',
		prompts: [controllerPrompt],
		actions: [controllerAction],
	});

export const serviceGenerator = (plop: NodePlopAPI): PlopGenerator =>
	plop.setGenerator('service', {
		description: 'generate a service',
		prompts: [servicePrompt],
		actions: [serviceAction],
	});
