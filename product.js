const mongoose= require('mongoose')

const productSchema = new mongoose.Schema({ // => aqui no schema eu preciso colocar todas as chaves que irao para o db.
  name: String,
  price: Number,
  brand: String,
  category: String
})

module.exports = mongoose.model('products', productSchema)
