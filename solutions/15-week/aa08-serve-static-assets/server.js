const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {


  if (req.method === 'GET' && req.url.startsWith('/static')) {
    console.log(req.url);
    const filePath = req.url.split('/static')[1];
    const extension = filePath.split('.')[1];

    const contentType = extension === 'css' ? 'text/css' : 'image/jpeg';

    const file = fs.readFileSync(`./assets${filePath}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);

   return res.end(file);
  }


  const html = fs.readFileSync('./index.html');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(html);

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
