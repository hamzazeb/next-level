const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const authRoute = require('./routes/auth');

// middlewares
app.use(cors());
app.use(express.json());
app.use('/api/users', authRoute);

var server = http.createServer(app);

const port = 5000;
server.listen(port, function () {
    console.log((new Date()) + `: Server is listening on port ${port}`);
});