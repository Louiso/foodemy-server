const  Curso = require('../models/Curso')
module.exports = {
  async getCursos() {
      const Cursos = await Curso.find({})
      return Cursos
  },
  async getCurso(id) {
      const currentCurso = await Curso.findById(id)
      return currentCurso
  },
  async createOrUpdateCurso(Curso) {
      if (Curso._id) {
          const updatedCurso = await Curso.findByIdAndUpdate(Curso._id, Curso, { new: true })
          return updatedCurso
      }

      const newCurso = await Curso.create(Curso)
      return newCurso
  },
  async deleteCurso(id) {
      const deletedCurso = await Curso.findByIdAndRemove(id)
      return deletedCurso
  }
}
