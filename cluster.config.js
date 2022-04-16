module.exports = {
  apps : [{
    name   : "Server 1",
    script : "./server.js",
    args   : "8081",
    instances : "max",
    exec_mode : "cluster"
  }]
}