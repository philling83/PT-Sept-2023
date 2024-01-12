/********** IMORT REQUIRED LIBRARIES **********/
const http = require("http");

/********* GLOBAL/ENVIRONMENT VARIABLES *********/
const port = 5000;

const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;

/*********** CREATE SERVER INSTANCE ***********/
/*********** SET RESPONSE PROPERTIES ***********/
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(responseBody);
});

/******* START SERVER TO LISTEN FOR REQUESTS *******/
server.listen(port, () => console.log(`Server running on port ${port}`));
