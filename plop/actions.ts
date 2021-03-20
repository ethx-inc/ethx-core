export const atomAction = {
    type: "add",
    path: "packges/components/atoms/{{componentName}}.atom.tsx",
    template: "/plop/templates/atom.component.hbs"
}
export const organismAction = {
    type: "add",
    path: "packges/components/organisms/{{componentName}}.organism.tsx",
    template: "/plop/templates/organism.component.hbs"
}
export const moleculeAction = {
    type: "add",
    path: "packges/components/molecules/{{componentName}}.molecule.tsx",
    template: "/plop/templates/molecule.component.hbs"
}
export const templateAction = {
    type: "add",
    path: "packges/components/templates/{{componentName}}.template.tsx",
    template: "/plop/templates/template.component.hbs"
}
export const pageAction = {
    type: "add",
    path: "packges/components/pages/{{componentName}}.page.tsx",
    template: "/plop/templates/page.component.hbs"
}
export const controllerAction = {
    type: "add",
    path: "packges/controllers/{{packageName}}.controller.tsx",
    template: "/plop/templates/controller.package.hbs"
}
export const serviceAction = {
    type: "service",
    path: "packges/components/{{packageName}}.service.tsx",
    template: "/plop/templates/service.package.hbs"
}