const express = require('express')
const app = express()
const routes = require('./Routes')
require('dotenv')
const connectToDb = require('./DB/db')


connectToDb()
app.use(express.json())
// Load routes
app.use('/api/v1', routes)

const PORT = 3000 || process.env.PORT
app.listen(PORT,()=>{
  console.log(`Server listening on ${PORT}`)
})

module.exports = app