const mongoose = require('mongoose')

function connectToDb() {
  mongoose.connect(
    `${process.env.DATABASE_URL}`, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
  )

  const db = mongoose.connection;
  db.on("error", (error)=> console.log(error))
  db.once("open", () => console.log('Connected to the database'))
}

module.exports = connectToDb

