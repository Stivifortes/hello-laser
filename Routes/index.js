const router = require('express').Router()

const listaClients = ['Stiven', 'Jorge', 'Fortes']

router.get('/', (request, response) => {
  response.send('Home Content')
})

router.get('/clientes', (request, response) => {
  response.status(201).json({ data: listaClients})
})

module.exports =  router 