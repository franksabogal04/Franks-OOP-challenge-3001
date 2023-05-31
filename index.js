const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const team = [];

const promptManager = () => {
    console.log('Enter Manager Information:');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email address:',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Office number:',
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            team.push(manager);
            promptTeamMembers();
        });
};

const promptEngineer = () => {
    console.log('Enter Engineer Information:');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email address:',
            },
            {
                type: 'input',
                name: 'github',
                message: 'GitHub username:',
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            team.push(engineer);
            promptTeamMembers();
        });
};

const promptIntern = () => {
    console.log('Enter Intern Information:');
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email address:',
            },
            {
                type: 'input',
                name: 'school',
                message: 'School:',
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            team.push(intern);
            promptTeamMembers();
        });
};

const promptTeamMembers = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'memberType',
                message: 'Choose a team member to add or finish building:',
                choices: ['Engineer', 'Intern', 'Finish Building'],
            },
        ])
        .then((answers) => {
            if (answers.memberType === 'Engineer') {
                promptEngineer();
            } else if (answers.memberType === 'Intern') {
                promptIntern();
            } else {
                generateHTMLFile();
            }
        });
};

const generateHTMLFile = () => {
    const html = generateHTML(team);
    fs.writeFile('./dist/team.html', html, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Team roster generated successfully!');
        }
    });
};

promptManager();

