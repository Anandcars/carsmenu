# carsmenu
The purpose of this project is to performance test the included REST API using Node.js

Here, you will be testing a simple CRUD REST application for Volvocars Library Management using Node.js and Express.js. 

To build the application, you will need to install the following:

Node.js
Express.js
Joi
nodemon (Node Monitor)


## Install dependencies & Run service
```sh
npm install
```
```sh
npm start
```


The application will run in the  port 8080 

```sh

http://localhost:8080/api/cars

```

Task: 
1.  Run the service
2.  Use K6io as the performance testing tool and run tests for the service (GET, POST, PUT, DELETE)
3.  Run the service + performance test using docker compose and visualize the results in Graphana 
4.  Run the service + performance test in Kubernetes and visualize the results in Graphana 
5.  Create a performance test report with explanation of your thoughts
Please use your imagination to implement the solution one such example can be to create a trial account in AWS/GCP and use terraform to allocate infrastructure and run the tests in a EC2 instance :) 

Feel free to change the source code if that is necessary for you to show different use cases one such eg: using a external database container to save the data :)

Also feel free to write a blog post with architecture diagram of the solution :)


| Quick reference | README |
| ------ | ------ |
| Nodemon | https://www.digitalocean.com/community/tutorials/workflow-nodemon|
| Express.js | https://expressjs.com/en/starter/hello-world.html|
| Graphana + InfluxDB |https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3|
|Kubernetes| https://cloud.google.com/solutions/distributed-load-testing-using-gke
|K6io| https://k6.io/open-source


