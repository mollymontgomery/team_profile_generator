const generateTeam = (team) => {
    console.log("Team from index.js", team)


    const teamManager = (Manager) => {
        return `
    <div class="col-4 mt-4">
        <div class="card-header" style="width: 100%">
        <h2>${Manager.getName()}</h2>
        <h4>${Manager.getRole()}</h4>
        </div>
        <div class="card-body">
        <p>ID: ${Manager.getId()}</p>
        <p>email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></p>
        <p>Office: ${Manager.getOfficeNumber()}</p>
        </div>
    </div>
    `
    }

    const teamEngineer = (Engineer) => {
        return `
    <div class="col-4 mt-4">
        <div class="card-header" style="width: 100%">
        <h2>${Engineer.getName()}</h2>
        <h4>${Engineer.getRole()}</h4>
        </div>
        <div class="card-body">
        <p>ID: ${Engineer.getId()}</p>
        <p>email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></p>
        <p>Github: ${Engineer.getGithub()}</p>
        </div>
    </div>
    `
    }


    const teamIntern = (Intern) => {
        return `
    <div class="col-4 mt-4">
        <div class="card-header" style="width: 100%">
        <h2>${Intern.getName()}</h2>
        <h4>${Intern.getRole()}</h4>
        </div>
        <div class="card-body">
        <p>ID: ${Intern.getId()}</p>
        <p>email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></p>
        <p>School: ${Intern.getSchool()}</p>
        </div>
    </div>
    `

    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => teamManager(manager)))

    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => teamEngineer(engineer)).join(""))

    html.push(team.filter(employee => employee.getRole() === "Intern").map(engineer => teamIntern(engineer)).join(""))

    return html.join("")

}

module.exports = team => {
    return `
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-info mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
<main>
    <div class='container'>
        <div class="row justify-content-center" id="team-card">
    ${generateTeam(team)}
    </div>
    </div>
</main>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>`
}