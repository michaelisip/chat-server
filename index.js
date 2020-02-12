const express = require('express')
const http = require('http')
const cors = require('cors')
const dotenv = require('dotenv')

const MongooseConnection = require('./src/utils/db')
const Socket = require('./src/utils/socketio')

dotenv.config()
const PORT = process.env.PORT || 5000
const router = require('./src/routes/router')

const app = express()
const server = http.createServer(app)
const io = new Socket(server)

MongooseConnection()
app.use(cors())
app.use(express.json())
app.use(router)
io.connection()

server.listen(PORT, () => console.log(`Listening to port ${PORT}`))