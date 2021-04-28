class Producto {
  constructor() {
    this.listaProductos = [
      {
        title: "Teclado Thermaltake TT eSports Challenger Prime 3 LED",
        price: 3399,
        thumbnail:
          "https://i.ibb.co/Zf40F5d/imagen.jpg",
        id: 1,
      },
      {
        title: "Mouse HyperX Pulsefire Haste RGB 16000 DPI",
        price: 4699,
        thumbnail:
          "https://i.ibb.co/cCshx6J/imagen-1.jpg",
        id: 2,
      },
      {
        title: "Silla Gamer Redragon C502 Capricornus Black",
        price: 30999,
        thumbnail:
          "https://i.ibb.co/R6yQfXt/imagen-2.jpg",
        id: 3,
      },
    ];
    this.nextIdProductos = 3;
  }

  get() {
    return this.listaProductos.length
      ? [...this.listaProductos]
      : { error: "No hay ningun producto cargado." };
  }

  getByID(id) {
    const reqProducto = this.listaProductos.find(
      (producto) => producto.id == id
    );
    return reqProducto || { error: "Producto no encontrado." };
  }

  add(data) {
    const nuevoProducto = { ...data, id: ++this.nextIdProductos };
    this.listaProductos.push(nuevoProducto);
    return nuevoProducto;
  }

  update(data, id) {
    this.listaProductos = this.listaProductos.map((producto) => {
      if (producto.id == id) {
        producto.title = data.title;
        producto.price = data.price;
        producto.thumbnail = data.thumbnail;
      }
      return producto;
    });
    return data;
  }

  delete(id) {
    const deletedProducto = this.listaProductos.filter(
      (producto) => producto.id == id
    );
    this.listaProductos = this.listaProductos.filter(
      (producto) => producto.id !== Number(id)
    );
    return deletedProducto;
  }
}

const productos = new Producto();
export { productos };