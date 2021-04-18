const express = require('express');
const router = express.Router();
const Products = require('../Productos');
const newProduct = new Products(`productos.json`);
const getProducts = newProduct.get();

router.get('/productos', (req, res) => {
  if (typeof getProducts == 'string') {
    res.status(200).json((JSON.parse(getProducts)));
  } else {
    res.status(404).json({ error: 'No hay productos cargados' });
  };
});

router.get('/productos/:id', (req, res) => {
  if (typeof getProducts == 'string') {
    let products = JSON.parse(getProducts);
    let productid = req.params.id;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == productid) {
        res.status(200).json(products[i]);
      };
    };
  } else {
    res.status(404).json({ error: 'No hay productos cargados' });
  };
});

router.post('/productos', (req, res) => {
  let title = req.body.title;
  let price = req.body.price;
  let thumbnail = req.body.thumbnail;
  let postProduct = newProduct.post(title, price, thumbnail);
  res.send(`Producto '${title}' agregado con éxito!`)
});

module.exports = router;