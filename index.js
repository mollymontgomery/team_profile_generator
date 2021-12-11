const fs = require('fs')
const inquirer = require('inquirer');
const

return inquirer
    .prompt([
        {
            type: 'list',
            name: 'workerType',
            message: 'What type of worker would you like to add?',
            choices: ['Engineer', 'Intern', 'Manager'],
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the person's name?"
        },
        {
            
        }
    ])

function addEngineer

function addIntern

function addManager