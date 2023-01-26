const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // {
    //     type: 'expand',
    //     message: 'Conflict on `file.js`: ',
    //     name: 'overwrite',
    //     choices: [
    //       {
    //         key: 'y',
    //         name: 'Overwrite',
    //         value: 'overwrite',
    //       },
    //       {
    //         key: 'a',
    //         name: 'Overwrite this one and all next',
    //         value: 'overwrite_all',
    //       },
    //       {
    //         key: 'd',
    //         name: 'Show diff',
    //         value: 'diff',
    //       },
    //       new inquirer.Separator(),
    //       {
    //         key: 'x',
    //         name: 'Abort',
    //         value: 'abort',
    //       },
    //     ],
    //   },
    
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project',
        validate: function (input){
            return required(input, 'Title')
        }
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Enter your project description',
        validate: function (input){
            return required(input, 'Description')
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "Enter installation instructions for your project (press enter to skip)",
        // validate: function(input){
        //     if (input == 's'){
        //         return true
        //     }
        // }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information (press enter to skip)',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What license do you want for this project',
        loop: false,
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense',
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines (press enter to skip)',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter your test instructions (press enter to skip)',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email',
    },
    {
        type: 'editor',
        name: 'questions',
        message: `Are there any more questions you want the reader of your README to know the answer to?
        Please type your questions and answers in the format:
        "- Question"
        "Answer"`
    }
];


badge_license = {'Apache License 2.0': 'Apache2.0',
            'GNU General Public License v3.0': 'GNU3.0',
            'MIT License': 'MIT',
            'BSD 2-Clause "Simplified" License': 'BSDSimplified',
            'BSD 3-Clause "New" or "Revised" License': 'BSDRevised',
            'Boost Software License 1.0': 'BoostSoftware',
            'Creative Commons Zero v1.0 Universal': 'CCZero1.0',
            'Eclipse Public License 2.0': 'EclipsePublic',
            'GNU Affero General Public License v3.0': 'GNUAffero3.0',
            'GNU General Public License v2.0': 'GNU2.0',
            'GNU Lesser General Public License v2.1': 'GNULesser2.1',
            'Mozilla Public License 2.0': 'Mozilla',
            'The Unlicense': 'Unlicense'
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}.md`, data, err => {
        if (err) {
            console.error(err);
          }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
        // console.log(generateMarkdown(answers));
        writeToFile('MYREADME', generateMarkdown(answers, badge_license));
      });
}

// function call to initialize program
init();


function required(input, field){
    if (input == ''){
        return `${field} required`
    }
    return true
}



const test_data = {
    "username": "Sulaiman-ai",        
    "email": "sulaiman.amjad@gmail.com",
    "title": "Qwerty",
    "description": "Describe qwerty", 
    "installation": "Install",        
    "usage": "Useage",
    "license": "Boost Software License 1.0",
    "contributing": "",
    "tests": "",
    "questions": `-Where to contact me:
*LinkedIn: LinkedIn Profile
-Do you provide any services?
*Yes, you can find my portfolio at portfolio.com`
  }

function test(answers){
    markdown = generateMarkdown(answers, badge_license)
    // console.log(markdown)
    writeToFile('MYREADME', markdown);
}

// test(test_data)