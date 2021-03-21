import { ActionConfig } from 'plop';

export const atomAction: ActionConfig = {
	type: 'add',
	path: 'packages/components/atoms/{{componentName}}.atom.tsx',
	template: '/plop/templates/atom.component.hbs',
};

export const organismAction: ActionConfig = {
	type: 'add',
	path: 'packages/components/organisms/{{componentName}}.organism.tsx',
	template: '/plop/templates/organism.component.hbs',
};

export const moleculeAction: ActionConfig = {
	type: 'add',
	path: 'packages/components/molecules/{{componentName}}.molecule.tsx',
	template: '/plop/templates/molecule.component.hbs',
};

export const templateAction: ActionConfig = {
	type: 'add',
	path: 'packages/components/templates/{{componentName}}.template.tsx',
	template: '/plop/templates/template.component.hbs',
};

export const pageAction: ActionConfig = {
	type: 'add',
	path: 'packages/components/pages/{{componentName}}.page.tsx',
	template: '/plop/templates/page.component.hbs',
};

export const controllerAction: ActionConfig = {
	type: 'add',
	path: 'packages/controllers/{{packageName}}.controller.tsx',
	template: '/plop/templates/controller.package.hbs',
};

export const serviceAction: ActionConfig = {
	type: 'add',
	path: 'packages/components/{{packageName}}.service.tsx',
	template: '/plop/templates/service.package.hbs',
};

export const packageAction: ActionConfig = {
	type: 'service',
	path: 'packages/components/{{packageName}}.service.tsx',
	template: '/plop/templates/service.package.hbs',
};
