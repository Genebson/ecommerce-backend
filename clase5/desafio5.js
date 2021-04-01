const http = require('http');

const server = http.createServer((request, response) => {
  let randomNumber = Math.ceil(Math.random() * 10);
  let randomDecimal = (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2);
  const responseObject = {
    id: randomNumber,
    title: `Producto ${randomNumber}`,
    price: randomDecimal,
    thumbnail: `Foto ${randomNumber}`
  }
  response.end(JSON.stringify(responseObject));
}).listen(3000);