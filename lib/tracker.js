const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = createConnection(
    {
        user: 'root',
        password: '@dolPhin102!',
        database: 'emp_db_tracker'
    },
    console.log('connected to the database')
);

class Tracker{
    startTracker() {
        prompt([
            {
                type: 'list',
                name: "prompt",
                message: "What would you like to do?",
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee','quit']
            }
        ]).then((data) => {
            switch(data.prompt){
                case 'View all departments':
                    console.log('placeholder');
                    viewDepartments();
                    break;
                case 'View all roles':
                    console.log('placeholder');
                    addDepartment();
                    break;
                case 'View all employees':
                    console.log('placeholder');
                    break;
                case 'Add department':
                    console.log('placeholder');
                    break;
                case 'Add role':
                    console.log('placeholder');
                    break;
                case 'Add employee':
                    console.log('placeholder');
                    break;
                case 'exit':
                    quit();
                    break;
            }
        });
    };

    viewDepartments() {
        db.query('SELECT * FROM departments', function (err, results) {
            console.log(results);
        })
    }

    addDepartment() {
        prompt([
            {
                type: 'input',
                name: 'newDepartment',
                message: 'What department would you like to add?'
            }
        ]).then((data) => {

            db.query(`INSERT INTO departments(department_name) VALUES (${data.newDepartment}) `);
            console.log(`${data.newDepartment} add to departments!`);
            startTracker();
        });
    };
    
};

export default Tracker;