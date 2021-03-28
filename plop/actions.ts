import { AddActionConfig } from 'plop';
import fs from 'fs';
import path from 'path';

export const generalComponentAction: AddActionConfig[] = [
	{
		type: 'add',
		path:
			'packages/components/{{lowerCase componentType}}s/{{kebabCase componentName}}-{{lowerCase componentType}}/src/{{kebabCase componentName}}.{{lowerCase componentType}}.tsx',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/general.component.hbs'),
	},
	{
		type: 'add',
		path:
			'packages/components/{{lowerCase componentType}}s/{{kebabCase componentName}}-{{lowerCase componentType}}/src/{{kebabCase componentName}}.stories.tsx',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/general.component.hbs'),
	},
	{
		type: 'add',
		path:
			'packages/components/{{lowerCase componentType}}s/{{kebabCase componentName}}-{{lowerCase componentType}}/src/index.ts',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/general.component.hbs'),
	},
	{
		type: 'add',
		path:
			'packages/components/{{lowerCase componentType}}s/{{kebabCase componentName}}-{{lowerCase componentType}}/src/{{kebabCase componentName}}.{{lowerCase componentType}}.d.ts',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/general.component.hbs'),
	},
	{
		type: 'add',
		path:
			'packages/components/{{lowerCase componentType}}s/{{kebabCase componentName}}-{{lowerCase componentType}}/package.json',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/general.component.hbs'),
	},
];

export const controllerAction: AddActionConfig = {
	type: 'add',
	path: 'packages/controllers/{{packageName}}.controller.tsx',
	template: '/plop/templates/controller.package.hbs',
	templateFile: path.join('./plop/templates/general.component.hbs'),
};

export const serviceAction: AddActionConfig = {
	type: 'add',
	path: 'packages/components/{{packageName}}.service.tsx',
	template: '/plop/templates/service.package.hbs',
	templateFile: path.join('./plop/templates/general.component.hbs'),
};
