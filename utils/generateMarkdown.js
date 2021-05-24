
function renderLicenseSelection(license) {
  if (license !== "None") {
    switch (license) {
      case "MIT":
        return `https://opensource.org/licenses/MIT`;
      case "APACHE 2.0":
        return `https://opensource.org/licenses/Apache-2.0`;
      case "GPL 3.0":
        return `https://www.gnu.org/licenses/gpl-3.0`;
      case "BSD 3":
        return `https://opensource.org/licenses/BSD-3-Clause`;
    }
  }
}

function renderLicenseBadge(license) {
  if (license !== "None") {
    switch (license) {
      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseSelection(license)})`;
      case "APACHE 2.0":
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${renderLicenseSelection(license)})`;
      case "GPL 3.0":
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseSelection(license)})`;
      case "BSD 3":
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](${renderLicenseSelection(license)})`;
    }
  } else {
    return "";
  }

}

function renderTableOfContents(license) {
  if (license !== "None") {
    return `[Installation](#installation)  
    [Usage](#usage)  
    [License](#license)  
    [Contributing](#contributing)  
    [Tests](#tests)  
    [Questions](#questions)  `;
  } else {
    return `[Installation](#installation)  
    [Usage](#usage)  
    [Contributing](#contributing)  
    [Tests](#tests)  
    [Questions](#questions)  `;
  }
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
  This project is licensed under the terms of the [${license}](${renderLicenseSelection(license)}) license.`
  } else {
    return "";
  }
}

function generateMarkdown(answers) {
  return `
  <!-- PROJECT LOGO -->
  <br />
  <p align="center">
      <img src="${answers.projectLogoImg}" alt="Logo" width="80" height="80">
  
    <h3 align="center"> ${answers.projectTitle} </h3>
  
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

  <!-- GETTING STARTED -->

  ## Installation
   ${answers.installation}
  
  
  ## Usage
   ${answers.usage}

  
  <!-- LICENSE -->
  
  ## License
    ${answers.projectTitle}
  ${renderLicenseBadge(answers.license)}

  ## Table of Contents
  ${renderTableOfContents(answers.license)}

  ## Contributing
  ${answers.contribution}
  ${renderLicenseSection(answers.license)}


  <!-- CONTACT -->
  
  ## Contact
  https://github.com/${answers.username}  
  For questions and suggestions, contact me at ${answers.email}.
  
  
`;
}

module.exports = generateMarkdown;
