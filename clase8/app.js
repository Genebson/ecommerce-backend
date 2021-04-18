const express = require('express');
const app = express();
const port = 3333;
const server = app.listen(port, () => { console.log(`Server inicializado en puerto http://localhost:${server.address().port}`); });
const productRoutes = require('./routes/products');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
server.on(`error`, error => console.log(`Server error ${error}`));



app.use('/api', productRoutes);