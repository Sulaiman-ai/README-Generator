[![License](https://img.shields.io/badge/license-GNUAffero3.0-green)](./LICENSE)
# README Generator
## Table of Contents
* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Description
This project generates a README file for the user, based on input that the terminal application receives from the user. The code:
- Prompts the user for:
    - The title of my project
    - Description
    - Installation instructions
    - Usage instructions
    - License used for the project
    - Contribution information
    - Tests
    - Other questions a reader might have
- Generates a formatted README file based on the user's input
## Installation
- Clone this repo
- Navigate to the repo in the terminal and enter "npm install inquirer 8.0.0"
## Usage
1. Navigate to the repo in the terminal
2. Enter "node index.js"
3. Terminal will prompt you with questions, answer the questions and hit enter
## License
GNU Affero General Public License v3.0
## Contributing
If you wish the contribute to this project and add new features:
1. Send me an email explaining what you want to add (email written below) and I will add you as a contributor
2. Create an issue for any new feature you want to add
3. Create your own branch for your code
4. When you are ready to upload, start a pull request for me to review
## Tests
index.js:
1. Comment out line 124 (init())
2. Uncomment line 160 (test(test_data))
3. Edit test_data with whatever answers you wish
4. Run "node index.js" in the terminal

generateMarkdown.js:
1. Uncomment line 79 (console.log(generateMarkdown(test_data)))
2. Edit test_data with whatever answers you wish
3. Run "node generateMarkdown.js" in the terminal
## Questions
**My GitHub profile:** https://github.com/Sulaiman-ai

**If you want to contact me, send me an email at:** sulaiman.amjad@gmail.com

**My LinkedIn profile:**

https://www.linkedin.com/in/sulaiman-amjad-1078a221a/

**Do you have a portfolio where I can see more of your work?**

Yes, you can find my portfolio at https://sulaimanamjad.ai

