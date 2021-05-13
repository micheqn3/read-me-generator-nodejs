const fs = require('fs'); // Includes the file system module
const generateReadme = require('./generate');
const inquirer = require('inquirer'); // Include inquirer package
inquirer  
    .prompt([
        {
            name: 'title', 
            message: 'What is the title of your project?',
            type: 'input'
        },
        {
            name: 'description',
            message: 'What is the description of your project?',
            type: 'input'
        },
        { 
            name: 'installation',
            message: 'State the installation instructions.',
            type: 'input'

        },
        {
            name: 'usage',
            message: 'State the usage information.',
            type: 'input'
        }, 
        {
            name: 'contributing',
            message: 'State the contribution guidelines.',
            type: 'input'

        },
        {
            name: 'test',
            message: 'State the test instructions.',
            type: 'input'

        },
        {
            name: 'badge',
            message: 'What badge license do you choose?',
            type: 'list',
            choices: ["Mozilla", new inquirer.Separator(), "MIT", new inquirer.Separator(), "IBM", new inquirer.Separator(), "Apache"]
        },
        {
            name: 'license',
            message: 'Provide a brief decription of your license.',
            type: 'input'
        },
        {
            name: 'github',
            message: 'What is the link to your github?',
            type: 'input'
        },
        {
            name: 'email',
            message: 'What is your email address?',
            type: 'input'

        }
    ])
    .then(answers => {
        let newBadge;
        const {title, description, installation, usage, contributing, test, badge, license, github, email} = answers; // Destructuring the object
        switch (badge) {
            case 'Mozilla':
                newBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                break;
            case 'MIT':
                newBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case 'IBM':
                newBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
                break;
            case 'Apache':
                newBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
        }
        const readText = generateReadme(newBadge, title, description, installation, usage, contributing, test, license, github, email)
        fs.appendFile('generatedReadme.md', readText, function (err) {
            if (err) throw err;
            console.log('Saved!');
          }); 
    })
    .catch(error => {
        if(error.isTtyError) {
            throw new Error("Prompt couldn't be rendered."); // Prompt couldn't be rendered in the current environment
          } else {
              throw new Error("Something else went wrong.");
          }
    })
