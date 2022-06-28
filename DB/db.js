const mongoose = require('mongoose')

function connectToDb() {
  mongoose.connect(
    'mongodb+srv://admin:_master2022@cluster0.xmsh3.mongodb.net/?retryWrites=true&w=majority', 
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

