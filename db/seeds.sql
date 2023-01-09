INSERT INTO departments (department_name)
VALUES  ("Sales"),
        ("Legal"),
        ("Finance"),
        ("Engineering");
       
INSERT INTO roles (title, salary, department_id)
VALUES  ("Sales Lead", 120000, 1),
        ("Salesperson", 95000, 1),
        ("Lawyer", 200000, 2),
        ("Administrative Assistant", 60000, 2),
        ("Account Manager", 150000, 3),
        ("Accountant", 115000, 3),
        ("Sr. Engineer", 180000, 4),
        ("Jr. Engineer", 130000, 4);
        
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Brycen", "Towers", 1, null),
        ("Cash", "Cruz", 2, 1),
        ("Jefferson", "Taylor", 3, null),
        ("Tiara", "Green", 4, 3),
        ("Kenzie", "Razi" 5, null),
        ("Logan", "Ruiz", 6, 5),
        ("Charly", "Asuma", 7, null),
        ("Ricardo", "Ramos", 8, 7),
        ("Cyrus", "Mc Leod", 8, 7);