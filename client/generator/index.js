module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "list",
        name: "template",
        message: "Choose template?",
        choices: [
          { name: "page", value: "page" },
          { name: "component", value: "component" },
          { name: "api", value: "api" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What is your component / page / api name?",
      },
      {
        type: "input",
        name: "path",
        message: "input your path under component / page  (api skip)",
      },
    ],
    actions: (data) => {
      const path = `../${data.path}/`;
      const actions =
        data.template === "page"
          ? [
              {
                type: "add",
                path: `../src/pages/${data.path}/${data.name}/index.tsx`,
                templateFile: `templates/${data.template}/index.tsx.hbs`,
              },
              {
                type: "add",
                path: `../src/components/pages/${data.path}/${data.name}/${data.name}-main.tsx`,
              },
            ]
          : data.template === "component"
          ? [
              {
                type: "add",
                path: `../src/components/pages/${data.path}/${data.name}.tsx`,
                templateFile: `templates/${data.template}/index.tsx.hbs`,
              },
            ]
          : [
              {
                type: "add",
                path: `../src/api/${data.name}/index.ts`,
                templateFile: `templates/${data.template}/index.ts.hbs`,
              },
              {
                type: "add",
                path: `../src/api/${data.name}/type.ts`,
                templateFile: `templates/${data.template}/type.ts.hbs`,
              },
            ];
      return actions;
    },
  });
};
