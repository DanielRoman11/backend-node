CREATE DATABASE IF NOT EXIST companydb;

USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY(id)
);

INSERT INTO employee VALUES
  (1, "Joe", 1000),
  (2, "Henry", 2000),
  (3, "Sam", 1500),
  (4, "Max", 3000),
  (5, "Daniel", 3500);

SELECT * FROM employee;
