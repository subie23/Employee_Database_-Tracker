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

