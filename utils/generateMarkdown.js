data = {
  "overwrite": "abort",
  "username": "suli",
  "title": "Project",
  "description": "Describe",
  "installation": "",
  "usage": "",
  "license": "Apache License 2.0",  
  "contributing": "",
  "tests": ""
}

// function to generate markdown for README
function generateMarkdown(data) {
  content = '';
  for (key in data){
    content += (data[key] == '') ? `` : 
    (key == 'title') ? `
    # ${capitaliseFirstLetter(data[key])}` : `
    ## ${capitaliseFirstLetter(key)}
${data[key]}`
  }
  return content;
//   return `# ${data.title}
//   ## Description
//   ${data.description}
//   ## Table of Contents
//   * [Installation](#installation)
//   * [Usage](#usage)
//   * [Credits](#credits)
//   * [License](#license)
//   ## Installation
//   ${data.installation}
//   ## Usage
//   ${data.usage}
//   ## License
//   ${data.license}
//   ## Contributing
//   ${data.contributing}
//   ## Tests
//   ${data.tests}
//   ## Questions
//   My GitHub profile: ${data.username}
//   If you want to contact me, send me an email at: ${data.email}

// `;
}

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// console.log(generateMarkdown(data))

function addSection(){}

module.exports = generateMarkdown;
