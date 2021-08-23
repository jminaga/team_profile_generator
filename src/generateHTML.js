

let generateHtml = (team) => {

  return
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
        <h2 class="card-title">${data[0].name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data[0].title}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data[0].employeeID}</li>
            <li class="list-group-item">Email: <a href="mailto:${data[0].email}">${data[0].email}</a></li>
            <li class="list-group-item">Office number: ${data[0].office}</li>
        </ul>
    </div>
</div>
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${data[1].name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2">${data[1].title}</i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${data[1].employeeID}</li>
            <li class="list-group-item">Email: <a href="mailto:${data[1].email}">${data[1].email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${data[1].github}" target="_blank" rel="noopener noreferrer">${team[1].name}</a></li>
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



module.exports = generateHtml;





