const  Tema = require('../models/Tema')
module.exports = {
  async getTemas() {
      const Temas = await Tema.find({})
      return Temas
  },
  async getTema(id) {
      const currentTema = await Tema.findById(id)
      return currentTema
  },
  async createOrUpdateTema(Tema) {
      if (Tema._id) {
          const updatedTema = await Tema.findByIdAndUpdate(Tema._id, Tema, { new: true })
          return updatedTema
      }

      const newTema = await Tema.create(Tema)
      return newTema
  },
  async deleteTema(id) {
      const deletedTema = await Tema.findByIdAndRemove(id)
      return deletedTema
  }
}
