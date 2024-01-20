# Practice: Music Archive Docs in a JSON file

In this practice, you will document the request and response components for
RESTful endpoints of a **JSON API server** in a JSON file.

## Set up

1. Clone the practice from GitHub.
2. Run `npm install` at the root of the project to install dependencies.

To set up the server that you will test your endpoints on, run `npm install`
inside of the __server__ folder. Please do not to look at the contents of the
__server__ folder until you finish this project.

To start the server, run `npm start` inside of the __server__ folder. This will
allow you to make requests to [http://localhost:5000] using any client (browser
and Postman).

To stop the server from listening to requests, press `CTRL + c` for
Windows/Linux or `CMD + c` for MacOS in the terminal that you started the server
(wherever you ran `npm start`). When you restart the server, it will be
re-seeded with all of the original data.

## Instructions

Document the server in the __answers.json__ JSON file provided to you. You can
make your requests to the server through Postman or through using `fetch` in the
browser.

Once you're finished, you can run ALL of the tests using `npm test` from the
root directory.

You may also run each test individually, using `npm run test-<NUM>`, and
replacing `<NUM>` with a number between 01 and 17 (corresponding to the endpoint
number in the __answers.json__ file).

### Documentation

The documentation for this server should be written in the `answers.json` file
provided to you. For each endpoint listed below, list out the request and
response components in the `answers.json` file.

#### Headers Formatting

**Include only necessary headers.**

To add a header as a component to the request or response, define the key and
value of a header in a JSON object set to the `headers` key on the `request`
or `response` object.

Here's an example:

```json
"headers": {
  "Content-Type": "application/json"
}
```

#### Request/Response Body Formatting

To add a `body` as a component to the request, define the data structure of the
`body` (object, array, nested object, or nested array). The values for objects
in the `body` must be a truthy values.

Here's an example:

```json
"body": {
  "color": true,
  "toolbox": [
    {
      "tool": true
    }
  ]
}
```

#### Removing a Component

To omit a component from the request or response, set the key of that request
or response component to `false`.

For example, to omit the `headers` of the request, change the `headers` key from
`null` to `false`.

```json
"headers": false,
```

To omit the `body` of the request, change the `body` key from `null` to `false`.

```json
"body": false
```

## Reminders about a JSON API server

Here are some reminders about a JSON API server.

A JSON API server is used as a data source for other web developers.

A JSON API server returns JSON strings as the bodies of all the responses. If a
request to the server requires a body, it will accept a JSON string as the body
of the request.

### Request components

In a JSON API server, the request may have a JSON string as the request body.

In the case of a **request with the body containing JSON**, the request may
look something like this:

```plaintext
HTTP/1.1 POST /posts
Content-Type: application/json

{"message":"Hola"}
```

The method of the request is `POST`, the URL of the request is `/posts`, the
`Content-Type` header is "application/json", and the body of the request is a
JSON string.

### Response components

In a JSON API server, the response will have a JSON response. There will be
**no redirection**.

In the case of a **response with the body containing JSON**, the response may
look something like this:

```plaintext
HTTP/1.1 200 OK
Content-Type: application/json;

[{"postId":1,"message":"Hello World!"},{"postId":2,"message":"Ciao"}]
```

The status code of the response is 200, the `Content-Type` header is
"application/json", and the body of the response is a JSON string.

### Headers

The only possible **request headers** of a JSON API server and their values are:

- `Content-Type` (when the request has a body):
  - "application/json"

The only possible **response headers** of a JSON API server and their values
are:

- `Content-Type` (when the response has a body):
  - "application/json"
