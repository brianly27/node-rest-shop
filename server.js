const http = require('http')

//after creating app.js, import app and pass into createServer()
const app = require('./app')

const port = 3000

const server = http.createServer(app)

//server.listen starts the server and passes the port as an argument
//afterwards, the server will execute the function that we passed into createSever()
server.listen(port)



