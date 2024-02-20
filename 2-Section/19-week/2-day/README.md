# `S2W19D2`

## Official Welcome to Section 2

### Recap of Section 1

- 126+ Days
- 18+ Weeks
- 9+ Assessments
- Countless # of coffees, Red Bulls, bugs
- Data Types, Functions, Recursion, LLs, Trees, Graphs, OOP, TDD, HTML, CSS, Servers

### Looking Forward

- Backend
    - ExpressJS
    - SQL
    - Sqlite3 + PostgreSQL
    - Sequelize
- 1st Half of Project
    - Organize database
    - Create backend server
- Frontend
    - React + Redux
- 2nd Half of Project
    - Create UI using data from backend

## Creating a server

```js
const express = require('express');

const app = express();

/* All sorts of stuff */

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
```

Make sure you `npm install express` first!

## Creating routes

```js
app.get('/users/:userId', (req, res) => {
  /* All sorts of stuff */
});
```

## Parsing the request's body

```js
app.use(express.json());
```

## Parsing info from URLs

```js
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
});
```

Whatever you set to `:valueName` gets saved as a key-value pair on the `req.params` object

## Sending responses

```js
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.status(200).send(`User details for userId: ${userId}`);
});
```

With Express, `res.send()` and `res.json()` both send the response, as well as call `res.end()` so you don't have to!

---

## Express Request/Response Objects

Express has built in properties and methods to make dealing with requests and responses easier

### Request Object `req`

- req.body - automatically gives us the parsed body of the request if it's JSON
  - the app must use `express.json()`

```js
app.use(express.json());
```

- req.query - gives us query string parameters in an object

```js
fetch('http://localhost:5000/items?coffee=Starbucks&music=lofi', {
  method: 'GET',
});


// req.query
{
  coffee: 'Starbucks',
  music: 'lofi',
};

console.log(req.query.music) // lofi
```

- req.params - gives us route parameters in an object

```js
fetch('http://localhost:5000/locations/Washington/Seattle', {
    method: 'POST'
})

app.post('/locations/:state/:city', ...)


// req.params
{
  state: 'Washington',
  city: 'Seattle',
};

console.log(req.params.city) // Seattle
```

### Response Object `res`

- res.status() - set the HTTP status code for the response
- res.send() - send HTTP response, Content-Type res header is auto set depending on argument passed in 
- res.json() - send JSON response

```js
res.status(200);

res.json({ some: 'data' });
// or
res.send('some data');
```

Can be chained!

```js
res.status(404).send('Page Not Found');
```