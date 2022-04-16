const moment = require("moment")

module.exports = () => {
  console.log(`Iniciando proceso ${process.pid}`)
  let contador = 10
  const intervalo = setInterval(() => {
    console.log(process.pid, moment().format("dd-MM-YYY"))
    if(contador == 0) {
      clearInterval(intervalo)
      process.exit()
    }

    contador -= 1
  }, 1000)
}