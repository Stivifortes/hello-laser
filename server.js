const dotenv = require('dotenv')
const express = require('express')
const app = express()
const routes = require('./routes')
const connectToDb = require('./config/db')

dotenv.config()
connectToDb()
app.use(express.json())

app.use('/api/v1', routes)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
  console.log(`Server listening on ${PORT}`)
})

module.exports = app