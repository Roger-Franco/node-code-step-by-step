const mongoose= require('mongoose')

const productSchema = new mongoose.Schema({ // => aqui no schema eu preciso colocar todas as chaves que irao para o db.
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String
})

module.exports = mongoose.model('products', productSchema)
