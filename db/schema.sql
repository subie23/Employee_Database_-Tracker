DROP DATABASE IF EXISTS this_employee_db;
CREATE DATABASE this_employee_db;

USE this_employee_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL
);