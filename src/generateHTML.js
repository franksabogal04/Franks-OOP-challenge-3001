const generateHTML = (team) => {
  const cards = team.map((member) => generateCard(member));

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <style>
    .center-text {
      text-align: center;
    }
    </style>
  </head>
  <body>
  <div class="container">
    <h1 class="center-text">Company Team</h1>
    <div class="row">
      ${generateMemberList(companyMembers)}
    </div>
  </div>  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  </body>
  </html>
`;
};

const generateCard = (member) => {
  let roleSpecificInfo = '';

  if (member.getRole() === 'Manager') {
      roleSpecificInfo = `Office Number: ${member.getOfficeNumber()}`;
  } else if (member.getRole() === 'Engineer') {
      roleSpecificInfo = `GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a>`;
  } else if (member.getRole() === 'Intern') {
      roleSpecificInfo = `School: ${member.getSchool()}`;
  }

  return `
  <div class="card">
      <h2>${member.getName()}</h2>
      <p>Role: ${member.getRole()}</p>
      <p>ID: ${member.getId()}</p>
      <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
      <p>${roleSpecificInfo}</p>
  </div>
  `;
};

module.exports = generateHTML;

