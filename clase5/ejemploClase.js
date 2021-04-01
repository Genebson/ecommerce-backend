function main() {
  const numeros = {}

  for (i = 0; i < 10000; i++) {
    const numero = name()
    if (!numeros[numero]) {
      numeros[numero] = 0
    }
    numeros[numero]++
  }
  console.log(numeros);
}

function name() {
  return parseInt(Math.random() * 20) + 1
}

// function randomNumber(min, max) {
//   return Math.random() * (max - min) + min;
// }