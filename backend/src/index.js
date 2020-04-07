const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const server = express()

server.use(cors())
/* 
server.use(cors({
    origin: 'http://meusite.com.br
}))
*/
server.use(express.json())
server.use(routes)

server.use(errors())

server.listen(3333)