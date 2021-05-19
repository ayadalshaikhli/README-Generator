// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title'
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'What is your project description'
        },
        {
            type: 'input',
            name: 'projectLink',
            message: 'What is your website URL'
        },
        {
            type: 'input',
            name: 'projectLogoImg',
            message: 'What is your website logo img path'
        },
        {
            type: 'input',
            name: 'projectScreenshot',
            message: 'project screenshot path'
        },
        {
            type: 'input',
            name: 'projectAbout',
            message: 'Information About the project'
        },
        {
            type: 'checkbox',
            name: 'projectBuiltWith',
            message: 'What did you build the project with',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        },
    ]);
};



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

const init = () => {
    promptUser()
    .then((answers) => writeFileAsync ("./read/README.md", generateMarkdown(answers)))
    .then(() => console.log("successfully done"))
    .catch((err) => console.error(err))
};

// Function call to initialize app
init();
