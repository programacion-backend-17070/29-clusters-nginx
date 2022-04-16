const app = require("./app")
const PORT = process.argv[3] || 8080

app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}\n`))