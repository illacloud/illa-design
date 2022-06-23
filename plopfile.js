module.exports = (plop) => {
  plop.setGenerator("new", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name(e.g. Input, InputNumber):",
        validate: (name) => {
          if (name === "") {
            return "Please input component name or press `ctrl-c` to quit"
          }

          return true;
        }
      },
      {
        type: "rawlist",
        name: "type",
        message: "Which storybook type does the component belong:",
        choices: [
          {
            name: "GENERAL, e.g. Button, Icon... ",
            value: "GENERAL",
          },
          {
            name: "LAYOUT, e.g. Grid, Space, Divider...",
            value: "LAYOUT",
          },
          {
            name: "DATA DISPLAY, e.g. List, Table, Tree...",
            value: "DATA DISPLAY",
          },
          {
            name: "DATA INPUT, e.g. Input, Form, Radio...",
            value: "DATA INPUT",
          },
          {
            name: "FEEDBACK, e.g. Progress, Message, Modal... ",
            value: "FEEDBACK",
          },
          {
            name: "NAVIGATION, e.g. Menu, Pagination...",
            value: "NAVIGATION",
          },
          {
            name: "OTHERS, e.g. Trigger, Affix...",
            value: "OTHERS",
          },
        ],
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "packages/{{dashCase name}}",
        base: "./plop-templates/component",
        templateFiles: "./plop-templates/component/*/**",
        globOptions: {
          expandDirectories: false,
        }
      },
    ],
  });

  plop.setGenerator("new-icon", {
    description: "Create a new icon",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Icon name(e.g. EmptyState, FileWorld, NextDouble):",
        validate: (name) => {
          if (name === "") {
            return "Please input icon name or press `ctrl-c` to quit"
          }

          return true;
        }
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/icon/src/icons/{{dashCase name}}.tsx",
        templateFile: "./plop-templates/icon/icon.tsx"
      },
      {
        type: "append",
        pattern: new RegExp(/(?=\} from "..\/src")/),
        path: "packages/icon/stories/icon.stories.tsx",
        separator: "",
        // put 2 space before
        template: "  {{properCase name}}Icon,\n"
      },
      {
        type: "append",
        path: "packages/icon/stories/icon.stories.tsx",
        templateFile: "./plop-templates/icon/story.tsx"
      },
      {
        type: "append",
        path: "packages/icon/src/index.ts",
        template: 'export * from "./icons/{{dashCase name}}"'
      },
    ]
  });
};
