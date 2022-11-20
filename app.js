const express = require('express');
const bookRouter = require('./routes/router');

const app = express();


app.use('/api', bookRouter);

module.exports = app;
