const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function addManager() {
    return inquirer.prompt([
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
            name: "officeNumber",
            message: "What is the team manager's office number?",
        }
    ])
}


function addEngineer
 return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is the Engineers github username?',
    },
]);


function addIntern
 return inquirer.prompt([
    {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend?',
    },
]);


