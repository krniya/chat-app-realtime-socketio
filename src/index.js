const path = require("path")
const express = require("express")
const socketio = require("socket.io")
const http = require("http")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.port || 3000

const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

io.on("connection", () => {
    console.log("new web socket connection")
})

server.listen(port, () => {
    console.log("Server is up and running at 3000")
})
