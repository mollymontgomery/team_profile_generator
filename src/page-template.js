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
    
}