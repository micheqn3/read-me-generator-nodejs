[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## README Generator 

This repository contains a README generator that is run through the command line using Node.js. 
The application will append the README to the sample folder.<br> <br> The sample README generated using the application can be found in /src/sample/


### Installation 

1. Make sure you have Node.js to run the application
2. Clone this repo
> HTTPS: `https://github.com/micheqn3/readme-generator-nodejs.git` <br>
> SSH: `git@github.com:micheqn3/readme-generator-nodejs.git`
3. Install the NPM package 
> npm install
4. Run the application in command line 
> node index.js

### This repository contains: 

  - index.js - This script uses the inquirer package to present to the user a series of questions about their project.
  Using this information, the script will create a README file in the sample folder based on the user input.

  - generate.js - This script will be used to pass user data into a template literal. This will generate the README file and is exported 
  to index.js.
  
 ### Technologies/Languages used: 

  - JavaScript
  - Node.js
  - Inquirer

### License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT 

### Walkthrough Demo


https://user-images.githubusercontent.com/68047684/118381156-dbace980-b59c-11eb-800e-a1db3a7ed3f7.mp4

