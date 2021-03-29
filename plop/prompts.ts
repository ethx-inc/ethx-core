import { InputQuestion, ListQuestion, QuestionCollection } from 'inquirer';

export const componentPrompt: QuestionCollection = [
	{
		name: 'componentType',
		type: 'list',
		message: 'Selected which type of component you would like to generate',
		choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Page'],
	},
	{
		name: 'componentName',
		type: 'input',
		message: 'Please give your component a name',
	},
];
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
