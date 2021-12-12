const teamManager = (Manager) => {
    return `
    <div class="card col" style="width: 250px">
        <div class="card-header" style="width: 100%">
        <h2>${Manager.getName()}</h2>
        </div>
        <div class="card-body">
        <p>ID: ${Manager.getId()}</p>
        <p>email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></p>
        <p>Office: ${Manager.getOffice()}</p>
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