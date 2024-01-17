# `S1M16D3`

## Fetch
- At a high level, fetch is used to make HTTP requests on the browser. It uses Promises to handle the asynchronous nature of HTTP requests and responses. fetch is used to formulate and send a request to a server and read the server response.

- Since the fetch API is provided by almost all major browsers, you can use the Fetch API by opening up the "Console" tab in Chrome or Firefox to use the built-in fetch function.

### Syntax
fetch('URL', { options }) -> returns a promise

### `GET` request
```
fetch('/dogs')                // notice that we can omit the options argument!
  .then((res) => {            // in this case res represents the response from the server!
    console.log(res.status);
  });
```

### `POST` request
```
fetch('/dogs', {              // in most cases with post we need to add the options object arg
    method : "POST"
    headers: {
        "Content-Type" : "application/json"
    }
    body: {
        some data             // depending on the server, we need to format this body correctly
    }
})
```
