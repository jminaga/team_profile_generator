const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'manager',
      message: "What is the Manager's name?",
    },
    {
      type: 'input',
      name: 'employeeID',
      message: 'What is the employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee email address?',
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is the employee office number?',
    },
    {
      type: 'list',
      name: 'choice1',
      message: 'Would you like an engineer or an intern?',
      choices: ['Engineer', 'Intern', 'Finish Team Build'],
      "engineer": function (answers) {
        if (answers.choice1 === 'Engineer') {
           inquirer.prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'Enter engineer name',
           }])
        }
    }
    },

  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    // fs.writeFile('index.html', htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
  });
