const router = require('express').Router()
const ClientController = require("../controllers/ClientController")

router.get('/', (request, response) => response.send('Home Content'))
router.get('/clientes', ClientController.index)

router.post('./cliente', ClientController.createClient)

module.exports =  router 