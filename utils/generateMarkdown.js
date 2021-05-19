// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <!-- PROJECT LOGO -->
  <br />
  <p align="center">
      <img src="${answers.projectLogoImg}" alt="Logo" width="80" height="80">
  
    <h3 align="center">${answers.projectTitle}</h3>
  
    <p align="center">
      ${answers.projectDescription}
    </p>
  </p>
  
  <!-- TABLE OF CONTENTS -->
  <details open="open">
    <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
          <li><a href="#built-with">Built With</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#roadmap">Roadmap</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgements">Acknowledgements</a></li>
    </ol>
  </details>
  
  <!-- ABOUT THE PROJECT -->
  
  ## About The Project
  
  [![Product Name Screen Shot][product-screenshot]](${answers.projectScreenshot})
  
  ${answers.projectAbout}
  
  ### Built With
  
  - [](${answers.projectBuiltWith})
  - []()
  - []()
  
  <!-- GETTING STARTED -->
  
  
  ## Installation
   ${answers.installation}
  
  
  <!-- USAGE EXAMPLES -->
  
  ## Usage
  
   ${answers.usage}
  <!-- ROADMAP -->
  
  
  <!-- CONTRIBUTING -->
  
  
  <!-- LICENSE -->
  
  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license. 
  
  <!-- CONTACT -->
  
  ## Contact
  
  Your Name - [${answers.email}](${answers.email}) - email
  
  Project Link: [${answers.projectLink}](${answers.projectLink})
  Project Github Link: [${answers.projectGithubLink}](${answers.projectGithubeLink})
  
  
`;
}

module.exports = generateMarkdown;
