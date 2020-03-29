const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

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

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, ...
 * NoSQL: MongoDB, CouchDB, ...
 */
routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes