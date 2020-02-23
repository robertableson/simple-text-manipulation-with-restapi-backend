const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    if(req.method === 'POST') {
      res.write('POSt good.');
    }
    else{
      res.write('Bad request.');
    }
    
    res.end();
  }
});

server.listen(3000);

console.log('listening on 3000');