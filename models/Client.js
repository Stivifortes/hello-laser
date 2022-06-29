const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  nif: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
  },
  age: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  treatment: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  }
})

module.exports = mongoose.model("Client", clientSchema)