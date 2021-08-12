const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
const apiFunction = require('./api_functions');

// middlewares
app.use(cors());
app.use(express.json());

// save user in database
app.post('/api/users/(:id)', apiFunction.saveUsers);

// get user by id
app.get('/api/users/(:id)', apiFunction.getUsers);

var server = http.createServer(app);

const port = process.env.port | 5000;
server.listen(port, function () {
    console.log((new Date()) + `: Server is listening on port ${port}`);
});