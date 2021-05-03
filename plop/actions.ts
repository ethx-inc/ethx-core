import path from 'path';
import { AddActionConfig } from 'plop';

export const generalComponentAction: AddActionConfig[] = [
	{
		type: 'add',
		path:
			'packages/components/{{dashCase componentType}}s/{{kebabCase componentName}}-{{dashCase componentType}}/src/{{pascalCase componentName}}.{{dashCase componentType}}.tsx',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/component.general.hbs'),
	},
	{
		type: 'add',
		path:
			'packages/components/{{dashCase componentType}}s/{{kebabCase componentName}}-{{dashCase componentType}}/src/{{pascalCase componentName}}.stories.tsx',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/component.stories.hbs'),
	},
	{
		type: 'add',
		path:
			'packages/components/{{dashCase componentType}}s/{{kebabCase componentName}}-{{pascalCase componentType}}/src/index.ts',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/component.index.hbs'),
	},
	{
		type: 'add',
		path:
			'packages/components/{{dashCase componentType}}s/{{kebabCase componentName}}-{{dashCase componentType}}/src/types.d.ts',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/component.types.hbs'),
	},
	{
		type: 'add',
		path:
			'packages/components/{{dashCase componentType}}s/{{kebabCase componentName}}-{{dashCase componentType}}/package.json',
		template: './templates/atom.component.hbs',
		templateFile: path.join('./plop/templates/component.package.hbs'),
	},
];

export const controllerAction: AddActionConfig = {
	type: 'add',
	path: 'packages/controllers/{{dashCase controllerName}}.controller.tsx',
	template: '/plop/templates/controller.package.hbs',
	templateFile: path.join('./plop/templates/controller.general.hbs'),
};

export const serviceAction: AddActionConfig = {
	type: 'add',
	path: 'packages/services/{{dashCase serviceName}}.service.tsx',
	template: '/plop/templates/service.package.hbs',
	templateFile: path.join('./plop/templates/service.general.hbs'),
};
