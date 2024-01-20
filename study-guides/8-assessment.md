# `Weeks 15 + 16 Study Guide`

## Topics
- HyperText Transfer Protocol (HTTP)
    - Request / Response Components
        - Methods
        - Headers
        - Status Codes
- API Web Server RESTful Conventions
- Promises
- Promise Chaining & async / await
- Fetch API

---

## Projects

- HTTP Basics in JSON
- Music Archive API Docs Long Practice
- Practice Assessment
- Promises Practices from Wk16 Mon
- Fetch Practices from Wk16 Tues

---

## Assessment Strategies
- Fill out what you know
    - Methods
        - `GET` **requests** never have a `body`
            - Therefore no headers
    - URLs
        - Follow RESTful conventions
- Parse through the `server` file
    - Find the `Route Handlers` section
        - See how the req / res objs are modified
- Use Postman to debug
    - Have 2 Terminal instances running:
        - One is running the server
        - One is used to run test specs
    - Helpful in determining response components
- Testing
    - Run individual tests with `npm run <<test-script>>`
    - Run `mocha -b` to stop at first failing test
