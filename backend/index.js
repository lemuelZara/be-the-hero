const express = require('express')

const server = express()
server.use(express.json())

/**
 * GET: Buscar informações
 * POST: Cadastrando uma informação
 * PUT: Alterar uma informação
 * DELETE: Deletar uma informação
 */

/**
 * Query Params: request.query, enviados na rota após "?"
 * Route Params: request.params, utilizados para identificar recursos
 * Request Body: request.body, corpo da requisição (Alteração, criação)
 */

server.get('/', (req, res) => {
    return res.json({ message: 's' })
})

server.listen(3333)