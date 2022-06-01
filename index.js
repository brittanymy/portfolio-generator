// Packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");

// Establish routes between employee library and index
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

// Push team questions
const teamData = [];

// Array of team questions
const teamQuestions = async () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter the employee name",
      name: "name",
    },
    {
      type: "input",
      message: "Enter the employee id",
      name: "id",
    },
    {
      type: "input",
      message: "Enter the employee email",
      name: "email",
    },
    {
      type: "list",
      message: "Enter the employee role",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
};

// Initialize app
function promptQuestions() {
  teamQuestions()
    .then((answers) => {
      if (answers.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter the office number",
              name: "officeNumber",
            },
          ])
          .then((managerOfficeNumber) => {
            const newManager = new Manager(
              answers.name,
              answers.id,
              answers.email,
              managerOfficeNumber.officeNumber
            );
            teamData.push(newManager);
          });
      } else if (answers.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter github username",
              name: "github",
            },
          ])
          .then((githubAnswer) => {
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAnswer.github
            );
            teamData.push(newEngineer);
          });
      } else if (answers.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter school name",
              name: "school",
            },
          ])
          .then(({ school }) => {
            const newIntern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              school
            );
            teamData.push(newIntern);
          });
      }
    })
    .then((response) => {
      const index = index.html(response);
      writeToFile("./dist/index.html", index);
    });
}

promptQuestions();
