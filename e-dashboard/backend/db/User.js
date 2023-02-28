const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({ // => aqui no schema eu preciso colocar todas as chaves que irao para o db.
  name: String,
  email: String,
  password: String
})

module.exports = mongoose.model('users', userSchema)
