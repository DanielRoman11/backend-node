# backend-node
The backend is built with Node.js using the Express framework to create a web server. This project provides a RESTful API that allows queries about employees and their salaries. A very basic project.

The default path is "/api/employees". When making a GET request to this path, the server returns a JSON response with the list of employees and their salaries.

The employee and salary information can be stored in a database, such as MongoDB or MySQL. The backend uses SQL queries to make the requests to the server.

The backend's RESTful API include additional routes to perform other operations, such as adding, updating or deleting employees.

This simple backend developed with Node.js and Express provides a RESTful API for querying employees and their salaries, using MySQL as the database to store and retrieve the necessary data.

The server is prepared to receive the following http verbs:

GET "/api/employees"

POST "/api/employees"

PATCH "/api/employees/${id}"

DELETE "/api/employees/${id}"
