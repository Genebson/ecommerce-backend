const operacion = (num1: number, num2: number, operaciones: string) => {
  const moduloOperacion: any = import("./modulo")
  import(`./${moduloOperacion}`)
    .then(module => module.Operaciones)
  const op: any = new moduloOperacion.Operaciones(num1, num2, operaciones).resultado()
  const promiseOperation = new Promise((resolve, reject) => {
    if (op != NaN) {
      resolve(op)
    } else {
      reject(new Error(op))
    }
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