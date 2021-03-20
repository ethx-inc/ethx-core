import {NodePlopAPI} from 'plop';

const packageJsonGeneration = (plop: NodePlopAPI) => {
	/* TODO: FIll this section out */
};

const folderStructureGeneration = (plop: NodePlopAPI) => {
	/* TODO: FIll this section out */
};

const packageSelector = (plop: NodePlopAPI) => {
	/* TODO: FIll this section out */
	type:"list",
	name:"packagesType",
	message: "Which type of package are you trying to create?",
	choices: [
		'Component',
		'Controller',
		'Service'
	]
};

const componentSelector = (plop: NodePlopAPI) => {
	/* TODO: FIll this section out */
	plop.setGenerator()
	type:"list",
	name:"componentType",
	message: "What type of component would you like to generate?",
	choices: [
		'Atom',
		'Molecule',
		'Organism',
		'Template',
		'Page'
	]
};

const welcomeMessage = plop => {
	message: "Welcome follow the prompts to generate your desired package";
}

module.exports = { packageJsonGeneration, folderStructureGeneration };
