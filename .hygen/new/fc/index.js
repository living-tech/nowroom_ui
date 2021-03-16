//
// yarn new:fc
//
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
        message: "Which Atomic Design category?",
        name: "category",
        type: "select",
      },
      {
        message: "What is the name of component?",
        name: "component_name",
        type: "input",
      },
      {
        message: "Is it have style?",
        name: "have_style",
        type: "confirm",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name } = answers;
      const path = `${category}/${component_name}`;
      const abs_path = `src/components/${path}`;
      return { ...answers, abs_path, category, path };
    });
  },
};
