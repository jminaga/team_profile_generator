const generateHTML = (answers) => {

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
        <h2 class="card-title">Jane</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: 8723</li>
            <li class="list-group-item">Email: <a href="mailto:jane@company.com">jane@company.com</a></li>
            <li class="list-group-item">Office number: 1253</li>
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

module.exports = generateHTML;





