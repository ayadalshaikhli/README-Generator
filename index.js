// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

function validateInput(input) {
    if (input === "") {
        console.log(chalk.red(`Please enter ${this.name}`));
        return false;
    }
    if (this.emailValidation) {
        const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(input);
        if (!isValid) {
            console.log(chalk.red(" Please enter a valid email"));
        }
        return isValid;
    }
    return true;
}
// TODO: Create an array of questionsList for user input
const questionsList = [
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
            type: "input",
            name: "email",
            message: "Enter your email",
            emailValidation: true,
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username",
            
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
        {
            type: "input",
            name: "projectInstallation",
            message: "Enter the installation instructions",
            
        },
        {
            type: "input",
            name: "projectUsage",
            message: "Enter the usage instructions",
            
        },
        {
            type: "input",
            name: "projectContribution",
            message: "Enter contribution guidelines",
            
        },
        {
            type: "list",
            name: "projectLicense",
            message: "Choose a license",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        }
    ];



questionsList.forEach(el => el.validate = validateInput.bind(el))


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app

const init = () => {
    inquirer.
    prompt(questionsList)
    .then((answers) => writeFileAsync ("./read/README.md", generateMarkdown(answers)))
    .then(() => console.log("successfully done"))
    .catch((err) => console.error(err))
};

// Function call to initialize app
init();
