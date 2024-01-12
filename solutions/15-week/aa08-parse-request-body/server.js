const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

/********* Import Required Libraries *********/
const http = require("http");

/********* Global/Environment Variables *********/
const port = 5000;

server = http.createServer((req, res) => { // Create instance of server
  console.log(req.method, req.url);        // Log method + url for debugging

  let reqBody = "";                        // Add packets of data to empty str
  req.on("data", (data) => {               // Listen for packets of data (readable stream)
    reqBody += data;
  });

  req.on("end", () => {                    // Listen for end of data stream
    if (reqBody) {
      req.body = parseBody(reqBody);       // Parse urlencoded body into obj
    };

    sendFormPage(req, res);                // Routes defined here, passing along req + res 
  });
});

server.listen(port, () => console.log(`Successfully started the server on port ${port}`));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
