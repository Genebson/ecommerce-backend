import fs from 'fs';

const products = [
  {
    title: "Teclado Thermaltake TT eSports Challenger Prime 3 LED",
    price: 3399.13,
    thumbnail: "https://i.ibb.co/Zf40F5d/imagen.jpg"
  },
  {
    title: "Mouse HyperX Pulsefire Haste RGB 16000 DPI",
    price: 4699.12,
    thumbnail: "https://i.ibb.co/cCshx6J/imagen-1.jpg"
  },
  {
    title: "Silla Gamer Redragon C502 Capricornus Black",
    price: 30999.55,
    thumbnail: "https://i.ibb.co/R6yQfXt/imagen-2.jpg"
  }
]

class Archivo {
  constructor(nombreArchivo) {
    this.nombreArchivo = `${nombreArchivo}.txt`
  }

  leer() {
    try {
      return new Promise((resolve, reject) => {
        fs.readFile(`./archivos/${this.nombreArchivo}`, "utf-8", (err, data) => {
          const lectura = [];
          if (!data) {
            fs.writeFileSync(`./archivos/${this.nombreArchivo}`, `${JSON.stringify(lectura)}`);
            console.log("Como no existe el archivo, se ha creado uno en el directorio elegido ")
            console.log(lectura)
          } else {
            console.log("DATOS TOMADOS DEL .TXT");
            console.log(JSON.parse(data))
          }
        });
      })
    }
    catch {
      console.log(err)
    }
  }

  async guardar() {
    let arrayProductos = []
    try {
      let id = 0;
      for (let producto of products) {
        let newID;

        if (!producto) newID = 1;
        else newID = id += 1;

        const info = {
          title: producto.title,
          price: producto.price,
          thumbnail: producto.thumbnail,
          id: newID
        }

        arrayProductos = [...arrayProductos, info]

        await fs.promises.writeFile(
          `./archivos/${this.nombreArchivo}`,
          `${JSON.stringify(arrayProductos)}\n`, (err) => {
            if (err) return console.log(err)
            console.log("error")
          }
        )
      }
      console.log("Información almacenada en .txt de forma exitosa \n")

      fs.readFile(`./archivos/${this.nombreArchivo}`, "utf-8", (err, data) => {
        console.log("Datos ingresados del .txt");
        console.log(JSON.parse(data))
      });

    }
    catch (error) {
      console.log(error)
    }
  }

  borrar() {
    fs.unlink(`./archivos/${this.nombreArchivo}`, (err) => {
      if (err) return console.log(err);

      console.log("Archivo .txt eliminado de forma completa");
    });
  }
}

const test = new Archivo("productos")


/* test.leer(); */
// test.guardar();
/* test.leer(); */
/* test.borrar(); */