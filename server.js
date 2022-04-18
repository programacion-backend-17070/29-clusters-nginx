const express = require("express")
const app = express()

const PORT = process.argv[2] || 8080

app.get("/", (req, res) => {
  res.send({
    pid: process.pid,
    name: "server"
  })
})

app.get("/end", (req, res) => {
  res.send("OK ya murio")
  process.exit()
})

app.all("*", (req, res) => res.sendStatus(404))

app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}\n`))
