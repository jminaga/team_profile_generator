// Inquirer Application

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
const fs = require('fs');

// const html = require('./src/generateHTML');

// Inquirer prompts



const generateHTML = (results) => {

    `
    <!DOCTYPE html>
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
          <h2 class="card-title">${manager.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${manager.employeeID}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.name}@company.com">${manager.name}@company.com</a></li>
              <li class="list-group-item">Office number: ${manager.office}</li>
          </ul>
      </div>
  </div>
  <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">Dave</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: 2456</li>
              <li class="list-group-item">Email: <a href="mailto:dave@company.com">dave@company.com</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/dave" target="_blank" rel="noopener noreferrer">dave</a></li>
          </ul>
      </div>
  </div>
  <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">Pete</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: I-007</li>
              <li class="list-group-item">Email: <a href="mailto:pete@company.com">pete@company.com</a></li>
              <li class="list-group-item">School: University of Scotland</li>
          </ul>
      </div>
  </div>
  ,<div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">Pam</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: I-009</li>
              <li class="list-group-item">Email: <a href="mailto:pam@company.com">pam@company.com</a></li>
              <li class="list-group-item">School: Portland State University</li>
          </ul>
      </div>
  </div>
  
          </div>
        </div>
      </div>
    </body>
  </html>
  
    `
  }



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
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
   
  ]).then(results => {
    const manager = new Manager (results.name, results.employeeID, results.email, results.office);
    console.log(manager);
    console.log(manager.email);
    addTeam();
  });

  function addTeam() {
      inquirer.prompt([{
          type: 'list',
          name: 'team',
          message: 'Would you like an Engineer or an Inter?',
          choices: ['Engineer', 'Intern', 'Exit'],
      }]).then(results => {
          if (results.team === "Engineer") {
              engineer();
          } else if (results.team === "Intern") {
              intern();
          } else {
              create();
          }
      })
  }

  function engineer() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?",
      },
      {
        type: 'input',
        name: 'employeeID',
        message: "What is the Engineer's ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email address?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github address?",
      },
    ]).then(results => {
        const engineer = new Engineer(results.name, results.employeeID, results.email, results.github);
        console.log(engineer);
        console.log(engineer.email);
        create();
    })
    }

    function intern() {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?",
          },
          {
            type: 'input',
            name: 'employeeID',
            message: "What is the Intern's ID?",
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email address?",
          },
          {
            type: 'input',
            name: 'github',
            message: "What is the Intern's Github address?",
          },
        ]).then(results => {
            const intern = new Intern(results.name, results.employeeID, results.email, results.github);
            console.log(intern.email);
            console.log(intern);
            create();
        })
        }


function create() {
    fs.writeFile('index.html', generateHTML, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );}

