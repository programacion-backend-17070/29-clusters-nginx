const cluster = require("cluster")
const http = require("http")
const CPUs = require("os").cpus().length

const interval = require("./interval")
const app = require("./app")

console.log(CPUs)

const PORT = process.argv[3] || 8080

if (cluster.isPrimary) {

  for (let i = 0; i < CPUs; i++) {
    setTimeout(() => cluster.fork(), 1500 * i)
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`)
  })
} else { 
  // interval()
  app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}\n`))
}