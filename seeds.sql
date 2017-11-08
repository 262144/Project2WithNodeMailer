

USE spa_db;

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