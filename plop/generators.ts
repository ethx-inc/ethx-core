import { PlopGenerator } from 'plop';

const atomGenerator = (plop): PlopGenerator =>
	plop.setGenerator('atom', {
		description: 'generate a atom',
		prompt: [],
		action: [atomAction],
	});

const organismGenerator = plop => {
	plop.setGenerator('organism', {
		description: 'generate a organism',
		prompt: [],
		action: [organismAction],
	});
};
const moleculeGenerator = plop => {
	plop.setGenerator('molecule', {
		description: 'generate a molecule',
		prompt: [],
		action: [moleculeAction],
	});
};
const templateGenerator = plop => {
	plop.setGenerator('template', {
		description: 'generate a template',
		prompt: [],
		action: [templateAction],
	});
};
const pageGenerator = plop => {
	plop.setGenerator('page', {
		description: 'generate a page',
		prompt: [],
		action: [pageAction],
	});
};
const controllerGenerator = plop => {
	plop.setGenerator('controller', {
		description: 'generate a controller',
		prompt: [],
		action: [controllerAction],
	});
};
const serviceGenerator = plop => {
	plop.setGenerator('service', {
		description: 'generate a service',
		prompt: [],
		action: [serviceAction],
	});
};
