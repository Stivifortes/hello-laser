const { response } = require("express")
const Client = require("../models/Client")
const { v4: uuid } = require('uuid')

module.exports = {
  async index(request, response){
    try {
      const clients = await Client.find();
      return response.status(200).json({ clients })
    } catch (error) {
      response.status(500).json({ error: error.message })
    }
  },
  async createClient(request, response){
    const { name, nif, treatment } = request.body;

    if( !name || !nif || !treatment){
      return response.status(400).json({ error: "Missing information"})
    }

    const client = new Client({
      _id: uuid(),
      name,
      nif,
      treatment
    })

    try {
      await client.save()

      return response.status(201).json({ message: "Client created!"})
    } catch (error) {
      return response.status(400).json({ error: error.message})
    }
  }
}
