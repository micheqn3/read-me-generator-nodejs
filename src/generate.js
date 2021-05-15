const generateReadme = (newBadge, title, description, installation, usage, contributing, test, license, github, email) =>  
// Function that will generate new Readme using template literals 
`${newBadge} 
## ${title}
        
### Description
${description}
        
## Table of Contents 
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
3. [Tests](#tests)
        
## Installation <a name="installation"></a>
${installation}
        
## Usage <a name="usage"></a>
${usage}
        
## License <a name="license"></a>
${license}
        
## Contributing <a name="contributing"></a>
${contributing}
        
## Tests <a name="tests"></a>
${test}
        
## Questions
* Github: ${github}
* Email: ${email}`;

module.exports = generateReadme; 