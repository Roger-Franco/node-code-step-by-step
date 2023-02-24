const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({ // => aqui no schema eu preciso colocar todas as chaves que irao para o db.
  name: String,
  price: Number,
  brand: String,
  category: String
})

const saveInDB =  async () => {
  const Product = mongoose.model('products', productSchema)
  let data = new Product({
    name:'max 100', 
    price: 300, 
    brand:'maxx', 
    category:'mobile'
  });
  const result = await data.save()
  console.log(data);
}

// saveInDB()

const updateInDB = async () => {
  const Product = mongoose.model('products', productSchema)
  let data = await Product.updateOne(
    {name:'max 100'},
    {
      $set:{price: 250, name:'max 110'}
    }
  );
  console.log(data);
}

// updateInDB()

const deleteInDB = async () => {
  const Product = mongoose.model('products', productSchema)
  let data = await Product.deleteOne({name:'max 121'})
  console.log(data);
}

// deleteInDB()

const findInDB = async () => {
  const Product = mongoose.model('products', productSchema)
  let data = await Product.find()
  console.log(data);
}

// findInDB()

const findOneInDB = async () => {
  const Product = mongoose.model('products', productSchema)
  let data = await Product.findOne({name:'max 110'})
  console.log(data);
}

findOneInDB()

