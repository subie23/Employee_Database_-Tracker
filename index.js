// the packages and assigned variables
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table')

// connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'employee_db'
    },
    console.log('connected to database')
);

// opens company tracker and prompts user with options 
const tracker = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: "prompt",
            message: "What would you like to do?",
            choices: ['View all departments', 'View employees by department', 'Add department','delete department', 'View all roles', 'View roles by manager',  'Add role', 'delete role', 'View all employees', 'Add employee',  'delete employee', 'update employee role', 'quit']
        }
    ]).then((data) => {
        switch(data.prompt){
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'view roles by manager':
                viewRoleByManager();
                break;
            case 'view employees by department':
                viewEmployeesByDepartment();
                break;
            case 'delete department':
                deleteDepartment();
                break;
            case 'delete role':
                deleteRole();
                break;
            case 'delete employee':
                deleteEmployee();
                break;
            case 'Add department':
                addDepartment();
                break;
            case 'Add role':
                addRole();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'update employee role':
                updateEmployee();
                break;
            case 'quit':
                quit();
                break;
        }
    });
};