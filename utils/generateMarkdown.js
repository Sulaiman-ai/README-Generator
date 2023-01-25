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
function generateMarkdown(data, licenses) {
  // console.log(data)
  // console.log(filterEmptyValues(data))
  answers = filterEmptyValues(data);
  content = '';
  content += `[![License](https://img.shields.io/badge/license-${licenses[data.license]}-green)](./LICENSE)
`;
  for (key in data){
    (key == 'title') ? content += `# ${capitaliseFirstLetter(data[key])}
${generateContentsMarkdown(answers)}` :
    content += (key == 'username' || key == 'email') ? `` : `
## ${capitaliseFirstLetter(key)}
${data[key]}`

//     content += (data[key] == '' || key == 'username' || key == 'email') ? `` : 
//     (key == 'title') ? `
// # ${capitaliseFirstLetter(data[key])}` : `
// ## ${capitaliseFirstLetter(key)}
// ${data[key]}`
  }
  content += `
## Questions
My GitHub profile: ${data.username}

If you want to contact me, send me an email at: ${data.email}`
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

function generateContentsMarkdown(data){
  text = `## Table of Contents`;
  for (key in data){
    text += (key == 'title' || key == 'username' || key == 'email') ? `` : `
* [${capitaliseFirstLetter(key)}](#${key})
`
  }
  if ('username' in data || 'email' in data){text += `* [Questions](#questions)`}
  return text;
}

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterEmptyValues(data){
  Object.keys(data).forEach(key => {
    if (!data[key]) delete data[key];
  });
  return data;
}

// console.log(generateMarkdown(data))

function addSection(){}

module.exports = generateMarkdown;
