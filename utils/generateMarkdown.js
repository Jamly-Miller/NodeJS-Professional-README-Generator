const licenseBadgeLinks = require("./licenseBadges");

// function to generate markdown for README
function generateMarkdown(res) {
  return `# ${res.name}

  ## GitHub License
  ${res.license}
  ## Description
  ${res.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Fun](#fun)
  4. [Challenges](#challenges)
  5. [Code Screenshot](#screenshot)
  6. [Tests](#tests)
  7. [Future Developments](#FutureDevelopments)
  8. [Contributing](#contributing)
  9. [Questions](#questions)
    
  ## **Installation** 
  ${res.install}

  ## **Usage** 
  ${res.usage}

  ## **Fun**
  ${res.fun}

  ## **Challenges** 
  ${res.challenges}

  ## **Screenshot** 
  ![Code Screenshot](${res.screenshot})

  ## **Test it** 
  Run this appliation by using the following command:
  \`\`\`
  ${res.test}
  \`\`\`

  ## **FutureDevelopment** 
  ${res.FutureDevelopment}

  ## **Contributing** 
  ${res.contribute}
    
  ## Questions 

  Questions? Please don't hesitate to reach out: 

  Email: [${res.email}](${res.email})

  GitHub: [${res.username}](https://github.com/${res.username})
    
`;
}

module.exports = generateMarkdown;
