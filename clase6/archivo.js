const fs = require('fs')

class Archivo {
  constructor(name) {
    this.name = name
  }
  async leer() {
    try {
      const productos = fs.promises.readFile('./productos.txt')
      return productos
    } catch (error) {
      return []
    }
  }
  async guardar(title, price, thumbnail) {
    try {
      let chequearSiExiste = await this.leer()
      if (typeof chequearSiExiste == 'string') {
        let json = JSON.parse(chequearSiExiste)

        let productoNuevo = {
          id: json.length + 1,
          name: title,
          price: price,
          thumbnail: thumbnail
        }
        json.push(productoNuevo)
        await fs.promises.writeFile('./productos.txt', JSON.stringify(json, null, 1))
        console.log(`Producto: ${productoNuevo.name} agregado correctamente!`);
      } else {
        let archivoNuevo = [{
          id: 1,
          name: title,
          price: price,
          thumbnail: thumbnail
        }]
        await fs.promises.writeFile('./productos.txt', JSON.stringify(archivoNuevo, null, 1))
        console.log(`Se creó correctamente el archivo "productos.txt" y se agregó el producto ${archivoNuevo[0].name}`);

      }
    } catch (error) {
      console.log(error);
    }
  }
  async borrar() {
    fs.unlink('./productos.txt', error => {
      if (error) {
        console.log('No se pudo eliminar el archivo porque no existe');
      } else {
        console.log('Archivo eliminado');
      }
    })
  }
}