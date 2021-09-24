//! Cannot figure out why fs cannot write file descript
//! Come back and figure out later
//! Try a different approach for submission

// Inquirer Application

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = require('./src/generateHTML');

// Inquirer prompts

const team = [];

function init(){

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
   
    team.push(manager);
    addTeam();
  });


}


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
            // create('index.html', generateHtml);
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
    
        team.push(engineer);
        console.log(typeof team[0].email);
       
        create('index.html', team);
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
            // create('index.html', generateHTML(team));
        })
        team.push(intern);
        
        }

//Call function to create file passing in results as data parameter


function create(file, results) {
    fs.writeFileSync(file, generateHtml(results))}

    init();


