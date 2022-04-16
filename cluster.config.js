module.exports = {
  apps : [{
    name   : "Server 1",
    script : "./server.js",
    args   : "8080",
    instances : "max",
    exec_mode : "cluster"
  }]
}