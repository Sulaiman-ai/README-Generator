const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: 'What is the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter your test instructions',
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
      });
}

// function call to initialize program
init();
