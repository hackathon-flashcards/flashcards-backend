const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

server.use(cors());
server.use(helmet());
server.use(express.json());

const androidRouter = require('./routes/android');
const computerScienceRouter = require('./routes/computerscience');
const dataScienceRouter = require('./routes/datascience');
const fullStackRouter = require('./routes/fullstack');
const iosRouter = require('./routes/ios');
const uxRouter = require('./routes/ux')

server.use('/api/android', androidRouter);
server.use('/api/computerScience', computerScienceRouter);
server.use('/api/dataScience', dataScienceRouter);
server.use('/api/fullStack', fullStackRouter);
server.use('/api/ios', iosRouter);
server.use('/api/ux', uxRouter);

server.get('/', (req, res) => {
    res.send(`Server is Running`)
});

module.exports = server;