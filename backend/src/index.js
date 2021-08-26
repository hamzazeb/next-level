const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api/users', authRoute);
app.use('/api/users/profile/', profileRoute);

var server = http.createServer(app);

const port = 5000;
server.listen(port, function () {
    console.log((new Date()) + `: Server is listening on port ${port}`);
});