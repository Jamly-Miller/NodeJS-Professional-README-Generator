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
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Fun](#fun)
  6. [Challenges](#challenges)
  7. [Future Developments](#FutureDevelopments)
  8. [Questions](#questions)
    
  ## **Installation** 
  ${res.install}

  ## **Usage** 
  ${res.usage}

  ## **Fun**
  ${res.fun}

  ## **Challenges** 
  ${res.challenges}

  ## **FutureDevelopment** 
  ${res.FutureDevelopment}

  ## **Contributing** 
  ${res.contribute}

  ## **Test it** 

  Run this appliation by using the following command:
  \`\`\`
  ${res.test}
  \`\`\`
    
  ## Questions 

  Questions? Please don't hesitate to reach out: 

  Email: [${res.email}](${res.email})

  GitHub: [${res.username}](https://github.com/${res.username})
    
`;
}

module.exports = generateMarkdown;
