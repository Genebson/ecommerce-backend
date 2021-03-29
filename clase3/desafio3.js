const recorrerTexto = (text, totalWords, cb, ms) => {
  let i = 0
  const words = text.split(' ')
  const id = setInterval(() => {
    if (i < words.length) {
      console.log(words[i]);
      i++
      totalWords++
    } else {
      clearInterval(id)
      cb(totalWords)
    }
  }, ms)
}

recorrerTexto('Lorem Ipsum', 0, (totalWords) => {
  recorrerTexto('Ipsum Lorem', totalWords, (totalWords) => {
    recorrerTexto('Loreip Summ', totalWords, (totalWords) => {
      console.log(`Proceso Completo. Cantidad total de palabras: ${totalWords}`);
    })
  })
})