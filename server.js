const app = require("./app")
const PORT = process.argv[2] || 8080

app.listen(PORT, () => console.log(`listeninggg on: http://localhost:${PORT}\n`))