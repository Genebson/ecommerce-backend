const express = require('express');
const app = express();
const port = 3333;
const server = app.listen(port, () => { console.log(`Server inicializado en puerto http://localhost:${server.address().port}`); });
const productRoutes = require('./routes/products');
const methodOverride = require('method-override');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
server.on(`error`, error => console.log(`Server error ${error}`));


app.use('/api', productRoutes);