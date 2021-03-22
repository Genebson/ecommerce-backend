
class User {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = (nombre == undefined || nombre == '') ? 'Mauricio' : nombre;
    this.apellido = (apellido == undefined || apellido == '') ? "Avero" : apellido;
    this.libros = (libros == undefined) ? libros = [] : libros;
    this.mascotas = (mascotas == undefined) ? mascotas = [] : mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`
  };

  addMascota(mascota) {
    return this.mascotas.push(mascota)
  };

  getMascotas() {
    return this.mascotas.length
  };

  addBook(titulo, autor) {
    const books = { titulo: titulo, autor: autor }
    this.libros.push(books);
  }

  getBooks() {
    const titleBooks = [];
    this.libros.forEach(book => {
      titleBooks.push(book.titulo)
    });
    return titleBooks;
  }
}

const mauri = new User(
  "Mauricio", "Avero",
  [
    { titulo: 'Harry Potter 1', autor: 'J.K Rowling' },
    { titulo: 'Harry Potter 2', autor: 'J.K Rowling' }
  ],
  ["Mara", "Felipe"]
)

const userUndefined = new User()

console.log(`Tu nombre y apellido es ${mauri.getFullName()}`);
mauri.addMascota("Peluche");
console.log(`La cantidad de mascotas que tiene ${mauri.getFullName()} son ${mauri.getMascotas()}`);
mauri.addBook("Harry Potter 3", "J.K Rowling");
console.log(`Lista completa de los libros:`)
console.log(mauri.getBooks())
console.log('\n');
console.log("Datos completos de la persona agregada: ")
console.log(mauri)
console.log("Datos completos de una persona sin datos: ")
console.log(userUndefined)