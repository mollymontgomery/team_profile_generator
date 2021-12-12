const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];
const output = path.resolve()
const outputPath = path.join(output, "team.html")

const generatePage = require('./src/page-template');

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your team manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team manager's id:"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email address?",
        },
        {
            type: "input",
            name: "office",
            message: "What is the team manager's office number?",
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        team.push(manager)
        employeeQuestions()
    })
}

function employeeQuestions() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Who do you want to add to the team?',
            choices: ["Engineer", "Intern", "No more team members"],
        }
    ]).then(choice => {
        if (choice.role === "Engineer") {
            addEngineer();
        } else if (choice.role === "Intern") {
            addIntern();
        } else {
            console.log(team)
            createTeam();
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter your engineers's name:"
        },
        {
            type: "input",
            name: "engineerId",
            message: "Enter the engineers's id:"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your enigneer's github username?",
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.enigineerEmail, answers.github)
        team.push(engineer)
        employeeQuestions()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter your intern's name:"
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the intern's id:"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school)
        team.push(intern)
        employeeQuestions()
    })
}

function createTeam(){
    if(!fs.existsSync(output)){
        fs.mkdirSync(output)
    }
    fs.writeFileSync(outputPath, render(team), "utf-8")
}


addManager()


