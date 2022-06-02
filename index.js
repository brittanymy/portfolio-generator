// Packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");

// Establish routes between employee library and index
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const generatehtml = require("./src/generatehtml.js")

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
            continueApp()
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
           continueApp()
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
           continueApp()
          });
      }
    })
    
}

const endQuestions = async() => {
    const response = await generatehtml(teamData) 
    await fs.writeFileSync("./dist/index.html", response);
}

const continueApp = ()=>{
    inquirer
    .prompt ([
        {
            type: "list",
            message: "Do you want to add more team members?",
            choices: ["Yes", "No"],
            name: "Userselection"
        }
    ])
    .then(({Userselection}) => {
        switch(Userselection) {
            case "Yes": promptQuestions(); break;
            case "No": endQuestions(); break;
        }
    })
}
promptQuestions();
