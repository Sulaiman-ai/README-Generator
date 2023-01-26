// function to generate markdown for README
function generateMarkdown(data, licenses) {
  generateQuestionsMarkdown(data.questions)
  answers = filterEmptyValues(data);
  content = '';
  content += `[![License](https://img.shields.io/badge/license-${licenses[data.license]}-green)](./LICENSE)
`;
  for (key in data){
    (key == 'title') ? content += `# ${capitaliseFirstLetter(data[key])}
${generateContentsMarkdown(answers)}` :
    content += (key == 'username' || key == 'email' || key == 'questions') ? `` : `
## ${capitaliseFirstLetter(key)}
${data[key]}`
  }
  content += `
## Questions
**My GitHub profile:** https://github.com/${data.username}

**If you want to contact me, send me an email at:** ${data.email}

${("questions" in data) ? generateQuestionsMarkdown(data.questions) : ``}`
  return content;
}

// function to compile and format the Questions sections
function generateQuestionsMarkdown(questions){
  let text = '';
  let questionsArray = questions.split('\r\n');
  for (index in questionsArray){
    let line = questionsArray[index];
    text += (line[0] == '-') ? `**${line.replace('-', '')}**

` : (line[0] == '*') ? `${line.replace('*', '')}

` : ``;
  }
  console.log('questions', text)
  return text;
}

// function to generate the Table of Contents
function generateContentsMarkdown(data){
  text = `## Table of Contents`;
  for (key in data){
    text += (key == 'title' || key == 'username' || key == 'email') ? `` : `
* [${capitaliseFirstLetter(key)}](#${key})
`
  }
  // if ('username' in data || 'email' in data){text += `* [Questions](#questions)`}
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

// Testing

let test_data = {
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

// to test just generateMarkdown with the test data
// console.log(generateMarkdown(test_data))

module.exports = generateMarkdown;
