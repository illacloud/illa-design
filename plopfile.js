module.exports = (plop) => {
  plop.setGenerator("new", {
    description: "create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
      },
      {
        type: "list",
        name: "type",
        message: "Which storybook type does the component belong",
        choices: ["GENERAL", "LAYOUT", "DATA DISPLAY", "DATA INPUT", "FEEDBACK", "NAVIGATION", "OTHERS"],
        default: 0,
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{name}}/src/index.ts",
        templateFile: "./plop-templates/src/index.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/src/{{name}}.tsx",
        templateFile: "./plop-templates/src/component.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/src/interface.tsx",
        templateFile: "./plop-templates/src/interface.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/src/style.tsx",
        templateFile: "./plop-templates/src/style.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/src/vite-env.d.ts",
        templateFile: "./plop-templates/src/vite-env.d.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/tests/{{name}}.test.tsx",
        templateFile: "./plop-templates/tests/component.test.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/stories/{{name}}.stories.tsx",
        templateFile: "./plop-templates/stories/component.stories.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/.gitignore",
        templateFile: "./plop-templates/.gitignore.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/CHANGELOG.md",
        templateFile: "./plop-templates/CHANGELOG.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/package.json",
        templateFile: "./plop-templates/package.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/README.md",
        templateFile: "./plop-templates/README.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/README_CN.md",
        templateFile: "./plop-templates/README_CN.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/tsconfig.json",
        templateFile: "./plop-templates/tsconfig.hbs",
      },
      {
        type: "add",
        path: "packages/{{name}}/vite.config.ts",
        templateFile: "./plop-templates/vite.config.hbs",
      },
    ],
  })
}
