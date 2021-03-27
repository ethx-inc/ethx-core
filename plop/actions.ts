import { AddActionConfig } from 'plop';

export const generalComponentAction: AddActionConfig = {
	type: 'add',
	path:
		'packages/components/{{componentType}}s/{{kebabCase componentName}}.{{componentType}}.tsx',
	template: './templates/atom.component.hbs',
	templateFile: './templates/general.component.hbs',
};

export const atomAction: AddActionConfig = {
	type: 'add',
	path: 'packages/components/atoms/{{componentName}}.atom.tsx',
	template: '/plop/templates/atom.component.hbs',
	templateFile: '',
};

export const organismAction: AddActionConfig = {
	type: 'add',
	path: 'packages/components/organisms/{{componentName}}.organism.tsx',
	template: '/plop/templates/organism.component.hbs',
	templateFile: '',
};

export const moleculeAction: AddActionConfig = {
	type: 'add',
	path: 'packages/components/molecules/{{componentName}}.molecule.tsx',
	template: '/plop/templates/molecule.component.hbs',
	templateFile: '',
};

export const templateAction: AddActionConfig = {
	type: 'add',
	path: 'packages/components/templates/{{componentName}}.template.tsx',
	template: '/plop/templates/template.component.hbs',
	templateFile: '',
};

export const pageAction: AddActionConfig = {
	type: 'add',
	path: 'packages/components/pages/{{componentName}}.page.tsx',
	template: '/plop/templates/page.component.hbs',
	templateFile: '',
};

export const controllerAction: AddActionConfig = {
	type: 'add',
	path: 'packages/controllers/{{packageName}}.controller.tsx',
	template: '/plop/templates/controller.package.hbs',
	templateFile: '',
};

export const serviceAction: AddActionConfig = {
	type: 'add',
	path: 'packages/components/{{packageName}}.service.tsx',
	template: '/plop/templates/service.package.hbs',
	templateFile: '',
};

export const packageAction: AddActionConfig = {
	type: 'add',
	path: 'packages/components/{{packageName}}.service.tsx',
	template: '/plop/templates/service.package.hbs',
	templateFile: '',
};
