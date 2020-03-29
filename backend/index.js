const express = require('express')

const server = express()

server.listen(3333)

server.get('/', (req, res) => {
    return res.json({message: 's'})
})