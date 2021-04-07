const fs = require('fs')
let fecha = new Date()

try {
  let data = fs.appendFileSync(
    './desafio.txt', + fecha.getFullYear() + "-" + fecha.getMonth() + "-" + fecha.getDay())
  console.log(data);
} catch (error) {
  console.log(error);
}