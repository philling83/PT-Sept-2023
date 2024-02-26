const express = require('express');
const app = express();

require('dotenv').config();

const { Op } = require('sequelize');

const { ValidationError } = require('sequelize');

app.use(express.json())

const routers = require('./routes')


app.use('/', routers);


//! endpoint not found handler

app.use((_req, _res, next) => {
    const err = new Error('The requested resources could not be found.');
    err.title = 'Resource not found';
    err.status = 404;
    next(err);
})

//! process sequelize errors
app.use((err, _req, _res, next) => {
    if (err instanceof ValidationError) {
        err.title = 'Validation error'
        next(err);
    }
})


app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        title: err.title,
        msg: err.message || 'Validation error',
        status: err.status || 500
    })
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
