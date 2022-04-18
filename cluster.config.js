module.exports = {
  apps: [{
    name: "Server Cluster",
    script: "server.js",
    args: "8080",
    instances: "max",
    exec_mode: "cluster"
  }]
}