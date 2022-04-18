/// proceso principal
/// subprocesos hijos/secundarios

const cluster = require("cluster")
const CPUs = require("os").cpus().length

const interval = require("./interval")
const app = require("./server")
const PORT = process.argv[2] || 8080

// console.log(CPUs)

if (cluster.isPrimary) {
  for (let i = 0; i < CPUs; i++) {
    setTimeout(() => cluster.fork(), 1500 * i)
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`)
  })

  // SIGTERM ctrl + c
} else {
  // console.log(process.pid, CPUs)
  // interval()
  app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}\n`))
}