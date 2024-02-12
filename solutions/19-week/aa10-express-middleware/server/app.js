const express = require('express');
const app = express();
require('express-async-errors')

app.use('/static', express.static('assets'));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} -> ${req.url}`)
  res.on('finish', () => {
    console.log(`res status code ${res.statusCode}`);
  })
  next();
})

// For testing purposes, GET /
app.get('/', (req, res, next) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);

  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

const dogRouter = require('./routes/dogs.js');

app.use('/dogs', dogRouter);

const resourceNotFound = (req, res, next) => {
  const err = new Error('The request resource could not be found');
  err.statusCode = 404;
  throw err;
}

//! middle ware to respond when a resource is not found.
app.use(resourceNotFound)


//! general error handling middle ware to send errors as response
app.use( (err, req, res, next) => {
  console.log(err.message);
  res.status(err.statusCode || 500);

  res.json({
    message: err.message,
    statusCode: res.statusCode,
    stack: process.env.NODE_ENV !== 'production' ? err.stack : null
  })
})



const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
