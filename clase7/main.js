import express from 'express';
import fs from 'fs';

const app = express();
const port = 8080;
const server = app.listen(port, () => {
  console.log(`Server inicializado en puerto http://localhost:${server.address().port}`);
});
server.on(`error`, error => console.log(`Server error ${error}`));

app.get('/items', (req, res) => {
  let file = fs.readFile('./productos.txt', 'utf-8', (err, cont) => {
    if (err) {
      res.send(`Ups! No pude leer el archivo`, err);
    } else {
      let parsedJSON = JSON.parse(cont);
      let items = {
        items: parsedJSON,
        cantidad: parsedJSON.length
      };
      res.send(items);
      let viewsFile = fs.readFile('./visitas.txt', 'utf-8', (err, cont) => {

        if (err) {

          let views = {
            visitas: {
              items: 1,
              itemRandom: 0
            }
          };
          fs.writeFileSync('./visitas.txt', JSON.stringify(views, null, 1));
        } else {
          let parsedJSON = JSON.parse(cont);
          let newViews = {
            visitas: {
              items: parsedJSON.visitas.items + 1,
              itemRandom: parsedJSON.visitas.itemRandom
            }
          }
          fs.writeFileSync('./visitas.txt', JSON.stringify(newViews, null, 1));
        };
      });
    };
  });
});

app.get('/item-random', (req, res) => {
  let file = fs.readFile('./productos.txt', 'utf-8', (err, cont) => {
    if (err) {
      res.send(`Ups! No pude leer el archivo`, err);
    } else {
      let parsedJSON = JSON.parse(cont);
      let randomNumber = Math.floor(Math.random() * parsedJSON.length);
      let item = {
        item: {
          id: parsedJSON[randomNumber].id,
          name: parsedJSON[randomNumber].name,
          price: parsedJSON[randomNumber].price,
          thumbnail: parsedJSON[randomNumber].thumbnail
        }
      };
      res.send(item);
      let viewsFile = fs.readFile('./visitas.txt', 'utf-8', (err, cont) => {

        if (err) {

          let views = {
            visitas: {
              items: 0,
              itemRandom: 1
            }
          };
          fs.writeFileSync('./visitas.txt', JSON.stringify(views, null, 1));
        } else {
          let parsedJSON = JSON.parse(cont);
          let newViews = {
            visitas: {
              items: parsedJSON.visitas.items,
              itemRandom: parsedJSON.visitas.itemRandom + 1
            }
          };
          fs.writeFileSync('./visitas.txt', JSON.stringify(newViews, null, 1));
        };
      });
    };
  });
});

app.get('/visitas', (req, res) => {
  let file = fs.readFile('./visitas.txt', 'utf-8', (err, cont) => {

    if (err) {
      res.send(`<h1>Ni /items o /item-random obtuvieron visitas!<h1>`);
    } else {
      let parsedJSON = JSON.parse(cont);
      res.send(parsedJSON);
    };
  });
});