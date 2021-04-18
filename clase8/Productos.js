const fs = require('fs');

class Productos {
  constructor(name) {
    this.name = name;
  };
  get() {
    try {
      const cont = fs.readFileSync('./productos.json', 'utf-8');
      return cont
    } catch (error) {
      return [];
    };
  };
  post(title, price, thumbnail) {
    try {
      let checkIfFileExists = this.get();
      if (typeof checkIfFileExists == 'string') {

        let parsedJSON = JSON.parse(checkIfFileExists);
        let newProduct = {
          id: parsedJSON.length + 1,
          title: title,
          price: price,
          thumbnail: thumbnail
        };
        parsedJSON.push(newProduct);
        fs.writeFileSync('./productos.json', JSON.stringify(parsedJSON, null, 1));
        console.log(`Producto: ${newProduct.title} agregado con éxito!`);
      } else {

        let newFile = [{
          id: 1,
          title: title,
          price: price,
          thumbnail: thumbnail
        }];

        fs.writeFileSync('./productos.json', JSON.stringify(newFile, null, 1));
        console.log(`Se creó con éxito el archivo 'productos.json' y se agregó el producto: ${newFile[0].title}`);
      };
    } catch (err) {
      console.log(err);
    };
  };
};
module.exports = Productos;