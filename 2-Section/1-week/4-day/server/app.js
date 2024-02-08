const express = require('express');

const app = express();

app.use(express.json());

//! import the routes from another folder
const routes = require('./routes');

//! connect routers to express app.
app.use(routes);


//! use ENV vars to get port
//! need to 'run dotenv run node app.js' to use the environment variables.
//! remember to use a .gitignore to hide env vars from the public

//! explain different uses for env variables like having a production 
const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`))
