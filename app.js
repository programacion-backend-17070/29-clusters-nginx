const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send({
    pid: process.pid,
    name: "server"
  })
})

app.all("*", (req, res) => res.sendStatus(404))

// app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}\n`))

module.exports = app