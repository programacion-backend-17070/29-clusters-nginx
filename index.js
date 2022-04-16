const express = require("express")
const app = express()

const PORT = process.argv[3] || 8080
app.get("/", (req, res) => {
  res.send({
    pid: process.pid,
    name: "server"
  })
})

app.all("*", (req, res) => res.sendStatus(404))

app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}\n`))