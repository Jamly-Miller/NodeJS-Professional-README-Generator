const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// function to initialize program
function init() {
    inquirer
      .prompt([
          {
              type: "input",
              message: "What is your GitHub user name?",
              name: "username"
          },
          {
              type: "input",
              message: "What is your email address?",
              name: "email"
          },
          {
              type: "input",
              message: "What is your project's title?",
              name: "title"
          },
          {
              type: "input",
              message: "Please write a short description of your project.",
              name: "description"
          },
          {
              type: "list",
              message: "What license should your project have?",
              name: "license",
              choices: [
                  "MIT",
                  "Unlicense",
                  "Apache 2.0",
                  "GNU v3",
                  "BSD 3-Clause",
                  "Mozilla Public License 2.0"
              ]
          },
          {
              type: "input",
              message: "What command should be run to install dependencies?",
              name: "installation",
          },
          {
              type: "input",
              message: "What command should be run to run tests?",
              name: "tests",
          },
          {
              type: "input",
              message: "What was fun about working on this project?",
              name: "fun",
          },
          {
              type: "input",
              message: "What challanges did you face working on this project?",
              name: "challanges",
          },
          {
            type: "input",
            message: "Do you have a screenshot of code for this project? Enter the path below.",
            name: "screenshot",
        },
          {
              type: "input",
              message: "What are the future development plans for this project?",
              name: "FutureDevelopment",
          },
          {
              type: "input",
              message: "What does the user need to know about contributing to the repository?",
              name: "contribute",
          },
      ])
      .then((res) => {
          let data = generateMarkdown(res);
          writeToFile("README.md", data);
        });
    }

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
    });
  }
 
// function call to initialize program
init();