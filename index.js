//---------------------- Packages needed for this application -------------------------------//
//local js in utils and src
const createHtml = require('./src/createHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const employees = [];


const writeDoc = (fileName, data) => {
    const text = createHtml(data);

    fs.writeFile(fileName, text, (err) =>
        err ? console.error(err) : console.log('\nHTML Generated!')
    );
};


const createManager = response => {
    const {name, id, email, phone, continueFlag} = response;
    const manager = new Manager(name, id, email, phone);
    employees.push(manager);
    addMoreEmployees(continueFlag);
};


const createEngineer = response => {
    const {name, id, email, github, continueFlag} = response;
    const engineer = new Engineer(name, id, email, github);
    employees.push(engineer);
    addMoreEmployees(continueFlag);
};

const createIntern = response => {
    const {name, id, email, school, continueFlag} = response;
    const intern = new Intern(name, id, email, school);
    employees.push(intern);
    addMoreEmployees(continueFlag);
};

const addMoreEmployees = answer => {
    if(answer !== 'Finish') {
        createNewEmployee(answer.toLowerCase());
    } else {
        writeDoc('./output/index.html', employees)
    }
};



const createNewEmployee = employee => {

   
    const questions = [
        {
            type: 'input',
            message: `What is the ${employee}'s Name? `,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is their employee id? `,
            name: 'id',
        
        },
        {
            type: 'input',
            message: `What is their Email Address? `,
            name: 'email',
         
        },
        {
            type: 'input',
            message: `What is their Office Number? `,
            name: 'office',
            when: () => {return employee === 'manager'}
        },
        {
            type: 'input',
            message: `What is their Github username? `,
            name: 'github',
            when: () => {return employee === 'engineer'},
          
        },
        {
            type: 'input',
            message: `What is their School Name? `,
            name: 'school',
            when: () => {return employee === 'intern'}
        },
        {
            type: 'list',
            message: `Would you like to add another employee or finish? `,
            name: 'continueFlag',
            choices: ['Engineer', 'Intern', "Finish"]
        },
    ];

    // Use Questions and create employees
    inquirer.prompt(questions).then((response) => {

        switch (employee) {
            case 'manager':
                createManager(response);
                break;
            case 'engineer':
                createEngineer(response);
                break;
            case 'intern':
                createIntern(response);
                break;
            default:
                break;
        }
    });
};

// Run Functions

const start = () => {
    createNewEmployee('manager');
}

start();