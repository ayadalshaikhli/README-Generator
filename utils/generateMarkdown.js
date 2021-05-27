function renderLicenseBadge(projectLicense){
  if(projectLicense !== "Unlicensed"){
    switch(projectLicense){
      case "ARTISTIC-2.0":
        return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
      case "AGPL-3.0" :
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`; 
        case "Zlib" :
          return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
        case "MIT" :
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case "APACHE 2.0" :
          return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case "GPL 3.0" :
          return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case "BSD 3" :
          return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        
    }
  }else{
    return ""
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(projectLicense)  {
  if (projectLicense !== "Unlicensed") {
    switch (projectLicense) {
      case "ARTISTIC-2.0":
        return `https://opensource.org/licenses/Artistic-2.0`;
        case "AGPL-3.0" :
          return `https://www.gnu.org/licenses/agpl-3.0`;
          case "Zlib" :
            return `https://opensource.org/licenses/Zlib`;
            case "MIT" :
            return `https://opensource.org/licenses/MIT`;
        case "APACHE 2.0":
          return `https://opensource.org/licenses/Apache-2.0`;
          case "GPL 3.0" :
            return `https://www.gnu.org/licenses/gpl-3.0`;
          case "BSD 3" :
            return `https://opensource.org/licenses/BSD-3-Clause`;

    }
  }else{
    return ""
  }
}
function renderLicenseSection(projectLicense) {
  if (projectLicense !== "Unlicensed") {
    return `## License
   [${projectLicense}] Project License.
   `
  } else {
    return "";
  }
}
// function renderLicenseSection(projectLicense) {
//   if(projectLicense !== "Unlicensed"){
//   return `## License  [${answers.projectTitle}]
//   (${renderLicenseBadge(answers.projectLicense)})
//   (${renderLicenseLink(answers.projectLicense)})
//   `
// }else{
//   return ""
// }
// }

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
      <li><a href="#projectLicense">License</a></li>
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
   ${answers.projectInstallation}
   <!-- CONTACT -->
  ## Contact
  https://github.com/${answers.username}  
  Email ${answers.email}.
  
  
  
  ## Usage
   ${answers.projectUsage}

  
  <!-- LICENSE -->

  ${renderLicenseSection(answers.projectLicense)}
  ${renderLicenseBadge(answers.projectLicense)}
  ${renderLicenseLink(answers.projectLicense)}



`;
}

module.exports = generateMarkdown;
