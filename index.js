const mongoose= require('mongoose')


const main =  async () => {
  mongoose.connect('mongodb://localhost:27017/e-comm');
  const productSchema = new mongoose.Schema({ // => aqui no schema eu preciso colocar todas as chaves que irao para o db.
    name: String,
    price: Number
  })
  const Product = mongoose.model('products', productSchema)
  let data = new Product({name:'max 121', price: 300});
  const result = await data.save()
  console.log(data);
}
main()
