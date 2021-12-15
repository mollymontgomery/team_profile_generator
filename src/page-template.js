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
        <h2>${Engineer.getName()}</h2>
        </div>
        <div class="card-body">
        <p>ID: ${Engineer.getId()}</p>
        <p>email: <a href="mailto:${Engineer.getEmail()}">${Manager.getEmail()}</a></p>
        <p>Office: ${Engineer.getGithub()}</p>
        </div>
    </div>
    `
}


const teamIntern = (Intern) => {
    return `
    <div class="card col" style="width: 250px">
        <div class="card-header" style="width: 100%">
        <h2>${Intern.getName()}</h2>
        </div>
        <div class="card-body">
        <p>ID: ${Intern.getId()}</p>
        <p>email: <a href="mailto:${Intern.getEmail()}">${Manager.getEmail()}</a></p>
        <p>Office: ${Intern.getSchool()}</p>
        </div>
    </div>
    `

}

const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => teamManager(manager)))

   // html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => teamEngineer(engineer)).join(""))


    return html.join("")

}

module.exports = team => {
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <title>Team Generator</title>
</head>
<body>
    <div class='container'>
    <div class='row'>
    ${generateTeam(team)}
    </div>
    </div>
</body>
</html>`
}