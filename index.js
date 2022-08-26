const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require('./src/generateHtml');
const teamMembers = [];


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's Name?",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's employee ID number?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's Email?",
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the manager's Office Number?",
        },

    ]).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)
        teamMembers.push(manager);
        createTeam()
    });
}



const promptEngineer = () => {
    console.log('promptEngineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's Name?",
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's employee ID number?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's Email?",
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github Username?",
        },

    ]).then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        teamMembers.push(engineer);
        createTeam()
    });
}


const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's Name?",
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's employee ID number?",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's Email?",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school?",
        },

    ]).then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
        teamMembers.push(intern);
        createTeam()
    });
}

const createTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'Position',
            message: "What kind position of position you would like to add?",
            choices: ["Engineer", "Intern", "Done"]
        },
        
    ]).then(function (userInput) {
        console.log(userInput.Position);
        switch (userInput.Position) {
            // case 'Manager': 
            //      promptManager();
            //      break;
            case 'Engineer': 
                return promptEngineer();
            case 'Intern': 
                return promptIntern();
            default: 
                return fs.writeFile('generateHtml.html', generateHtml(teamMembers), (err) => {
                if (err) {
                    return console.log(err);
                } else {
                    console.log('Success! Employee filled!');
                }
            });
        }
    })

}



function htmlBuilder() {
    console.log("Team created!");

    fs.writeFileSync(
      outputPath,
      generateTeam(teamArray),
      "UTF-8"
    );
  }

  promptManager();
//   createTeam();