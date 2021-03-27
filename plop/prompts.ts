import { InputQuestion, ListQuestion } from 'inquirer';

export const atomPrompt: InputQuestion = [
	{
		type: 'input',
		name: 'atomName',
		message: 'Please enter atom name',
	},
];

export const organismPrompt: InputQuestion = {
	type: 'input',
	name: 'organismName',
	message: 'Please enter organism name',
};
export const moleculePrompt: InputQuestion = {
	type: 'input',
	name: 'moleculeName',
	message: 'Please enter molecule name',
};
export const templatePrompt: InputQuestion = {
	type: 'input',
	name: 'templateName',
	message: 'Please enter template name',
};
export const pagePrompt: InputQuestion = {
	type: 'input',
	name: 'pageName',
	message: 'Please enter page name',
};
export const componentPrompt: ListQuestion = {
	type: 'list',
	name: 'componentType',
	message: 'Selected which type of component you would like to generate',
	choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Page'],
};
export const controllerPrompt: InputQuestion = {
	type: 'input',
	name: 'controllerName',
	message: 'Please enter controller Name',
};
export const servicePrompt: InputQuestion = {
	type: 'input',
	name: 'serviceName',
	message: 'Please enter service Name',
};
export const packagePrompt: ListQuestion = {
	type: 'list',
	name: 'packageType',
	message: 'Please select your package type',
	choices: ['Component', 'Controller', 'Service'],
};
