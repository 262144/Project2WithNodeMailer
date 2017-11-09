DROP DATABASE spa_db;

CREATE DATABASE spa_db;

USE spa_db;


INSERT INTO 
	customers (firstName, lastName, email, password, createdAt, updatedAt) 
VALUES 
	("Edna", "Wilson", "edna.wilson@gmail.com", "password1234", sysdate(), sysdate()),
	("Jessica", "Jones", "jessica.jones@gmail.com", "password1234", sysdate(), sysdate()),
	("William", "Anderson", "william.anderson@gmail.com", "password1234", sysdate(), sysdate());

INSERT INTO 
	roles (service, roleType, createdAt, updatedAt) 
VALUES 
	("Massage", "Masseuse", sysdate(), sysdate()),
	("Facial", "Esthetician", sysdate(), sysdate()),
	("Manicure", "Manicurist", sysdate(), sysdate()),
    ("Pedicure", "Pedicurist", sysdate(), sysdate()); 
    

INSERT INTO 
	employees (firstName, lastName, email, password, createdAt, updatedAt, RoleId) 
VALUES 
	("Jennifer", "Smith", "jennifer.smith@gmail.com", "password1234", sysdate(), sysdate(), 1),
    ("Scott", "Johnson", "scott.myers@gmail.com", "password1234", sysdate(), sysdate(), 2), 
    ("Sally", "Miller", "sally.miller@gmail.com", "password1234", sysdate(), sysdate(), 3),
    ("David", "Wilson", "david.wilson@gmail.com", "password1234", sysdate(), sysdate(), 4),
    ("Ellie", "Ness", "ellie.ness@gmail.com", "password1234", sysdate(), sysdate(), 1),
    ("Henry", "Stevens", "henry.stevens@gmail.com", "password1234", sysdate(), sysdate(), 2),
    ("Zoey", "Pants", "zoey.pants@gmail.com", "password1234", sysdate(), sysdate(), 3),
    ("Cassandra", "Davis", "cassandra.davis@gmail.com", "password1234", sysdate(), sysdate(), 4),
    ("Richard", "Richardson", "richard.richardson@gmail.com", "password1234", sysdate(), sysdate(), 1);
    
INSERT INTO 
	appointments (appointmentTime, message, createdAt, updatedAt, CustomerId, EmployeeId) 
VALUES 
	('2017-11-11 10:00:00',"hi", sysdate(), sysdate(), 1, 1),
    ('2017-11-11 12:00:00',"hi", sysdate(), sysdate(), 2, 1),
    ('2017-11-11 13:00:00',"hi", sysdate(), sysdate(), 3, 1),
	('2017-11-15 12:00:00',"hi", sysdate(), sysdate(), 2, 2),
	('2017-11-20 09:00:00', "hi", sysdate(), sysdate(), 2, 4),
    ('2017-11-20 09:00:00', "hi", sysdate(), sysdate(), 3, 3);
    
SELECT * FROM employees;

SELECT * FROM customers;

SELECT * FROM roles;

SELECT * FROM appointments;    