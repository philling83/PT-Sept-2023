const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

// Resource Not Found Route Handler
app.use((req, res, next) => {
  const err = new Error("Resource Not Found");
  err.statusCode = 404;
  next(err);
});

// Error Handler Middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode);
  res.json({
    message: err.message,
    status: res.statusCode
  });
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
