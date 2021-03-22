import { Operaciones } from "./modulo"

const moduloOperacion = "./modulo"

const operacion = (num1: number, num2: number, operaciones: 'string') => {
  return new Promise((resolve, reject) => {
    import(moduloOperacion).then((modulo) => {
      const operaciones = new Operaciones(num1, num2, operaciones)
      resolve(modulo.resultado(num1, num2, operaciones));
    })
      .catch(console.error)
  })
}

const operaciones = async () => {
  try {
    const suma: any = await operacion(1, 1, 'suma');
    console.log(suma)
    const resta: any = await operacion(3, 1, 'resta');
    console.log(resta)
    const multiplicacion: any = await operacion(3, 3, 'multiplicacion');
    console.log(multiplicacion)
    const division: any = await operacion(27, 3, 'division');
    console.log(division);
  } catch (error) {
    console.log(error);

  }
}

operaciones()