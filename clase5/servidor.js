const http = require('http')
const port = 8080

const server = http.createServer((req, res) => {
  console.log('recibiendo peticion: ');
  console.log(req);
  res.end('ok, recibido')
})

server.listen(port, () => {
  console.log('conectado al puerto');
})