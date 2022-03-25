module.exports = (plop) => {
  plop.setGenerator("new", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name(e.g. Input, InputNumber):",
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
        templateFiles: "./plop-templates/**",
      },
    ],
  });
}
