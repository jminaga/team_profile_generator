const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3 team-heading jumbotron bg-info text-white">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
          <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.managerName}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.employeeID}</li>
            <li class="list-group-item">Email: <a href="mailto:${answers.employeeEmail}">${answers.employeeEmail}</a></li>
            <li class="list-group-item">Office number: ${answers.employeeOffice}</li>
        </ul>
    </div>
</div>
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.engineerName}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2">Engineer</i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.engineerEmployeeID}</li>
            <li class="list-group-item">Email: <a href="mailto:${answers.engineerEmail}">${answers.engineerEmail}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${answers.github}" target="_blank" rel="noopener noreferrer">${answers.engineerName}</a></li>
        </ul>
    </div>
</div>


        </div>
      </div>
    </div>
  </body>
</html>
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the Manager's name?",
    },
    {
      type: 'input',
      name: 'employeeID',
      message: 'What is the employee ID?',
    },
    {
      type: 'input',
      name: 'employeeEmail',
      message: 'What is the employee email address?',
    },
    {
      type: 'input',
      name: 'employeeOffice',
      message: 'What is the employee office number?',
    },
    {
      type: 'list',
      name: 'team',
      message: 'Would you like an Engineer or an Inter?',
      choices: ['Engineer', 'Intern', 'Exit'],
  },
  {
    type: 'input',
    name: 'engineerName',
    message: "What is the Engineer's name?",
  },
  {
    type: 'input',
    name: 'engineerEmployeeID',
    message: "What is the Engineer's ID?",
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: "What is the Engineer's email address?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is the Engineer's Github address?",
  },

  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
