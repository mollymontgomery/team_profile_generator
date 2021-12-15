const generateTeam = (team) => {
    console.log("Team from index.js", team)


    const teamManager = (Manager) => {
        return `
    <div class="card col" style="width: 250px">
        <div class="card-header" style="width: 100%">
        <h2>${Manager.getRole()}</h2>
        <h2>${Manager.getName()}</h2>
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
    <div class="card col" style="width: 250px">
        <div class="card-header" style="width: 100%">
        <h2>${Engineer.getRole()}</h2>
        <h2>${Engineer.getName()}</h2>
        </div>
        <div class="card-body">
        <p>ID: ${Engineer.getId()}</p>
        <p>email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></p>
        <p>Office: ${Engineer.getGithub()}</p>
        </div>
    </div>
    `
    }


    const teamIntern = (Intern) => {
        return `
    <div class="card col" style="width: 250px">
        <div class="card-header" style="width: 100%">
        <h2>${Intern.getRole()}</h2>
        <h2>${Intern.getName()}</h2>
        </div>
        <div class="card-body">
        <p>ID: ${Intern.getId()}</p>
        <p>email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></p>
        <p>Office: ${Intern.getSchool()}</p>
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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet: href="./style.css">
</head>
<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-info mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class='container'>
    ${generateTeam(team)}
    </div>
    </div>
</body>
</html>`
}