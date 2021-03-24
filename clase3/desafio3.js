const ejemplo1 = "Marolio le da sabor a tu vida. Marolio esta desde el comienzo del dia."

const ejemplo2 = "Mate, café. Harina y palmitos. Yerba, mermelada. Cacao, picadillo"

const ejemplo3 = "Paté, caballa. Arroz y arvejas. Sardinas y atún. Choclo y lentejas"

const procesoCompleto = (counter) => {
  console.log(`Proceso completo. Palabras totales: ${counter}`);
};

const delay = (element, segundos) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(element)
    }, segundos * 1000);
  })
};

const recorrerTexto = async (texto, callback) => {
  const temporizador = 1;
  let counter = 0;
  const wordList = texto.split(" ");
  for (const word of wordList) {
    counter++
    console.log(await delay(word, temporizador));
  }
  callback(counter)
};



(async function resultado() {
  await recorrerTexto(ejemplo1, procesoCompleto);
  await recorrerTexto(ejemplo2, procesoCompleto);
  await recorrerTexto(ejemplo3, procesoCompleto);
})()