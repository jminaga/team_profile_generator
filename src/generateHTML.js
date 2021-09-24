

let generateHtml = (team) => {

  return
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3 jumbotron bg-info text-white">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div col-12 d-flex justify-content-center">
          <div class="card">
    <div class="card">
        <h2 class="card">${data[0].name}</h2>
        <h3 class="card"><i class="fas fa-mug-hot mr-2"></i>${data[0].title}</h3>
    </div>
    <div class="card">
        <ul class="list-group">
            <li class="list">ID: ${data[0].employeeID}</li>
            <li class="list">Email: <a href="mailto:${data[0].email}">${data[0].email}</a></li>
            <li class="list">Office number: ${data[0].office}</li>
        </ul>
    </div>
</div>
<div class="card">
    <div class="card">
        <h2 class="card">${data[1].name}</h2>
        <h3 class="card"><i class="fas fa-glasses mr-2">${data[1].title}</i></h3>
    </div>
    <div class="card">
        <ul class="list">
            <li class="list">ID: ${data[1].employeeID}</li>
            <li class="list">Email: <a href="mailto:${data[1].email}">${data[1].email}</a></li>
            <li class="list">GitHub: <a href="https://github.com/${data[1].github}" target="_blank" >${team[1].name}</a></li>
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





