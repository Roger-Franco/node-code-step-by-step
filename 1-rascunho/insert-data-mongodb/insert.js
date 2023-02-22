const dbConnect = require('./mongodb')

const insertData = async () => {
  let data = await dbConnect()
  // let result = await data.insertOne({name: 'note 5', brand: 'vivo', price: 320, category: 'mobile'})
  let result = await data.insertMany(
    [
      {name: 'max 5', brand: 'micromax', price: 420, category: 'mobile'},
      {name: 'max 6', brand: 'micromax', price: 520, category: 'mobile'},
      {name: 'max 7', brand: 'micromax', price: 620, category: 'mobile'}
    ]
    )
  // console.log(result);
  if(result.acknowledged) {
    console.warn("data is inserted")
  }
}

insertData()

// no terminal usar "nodemon insert.js"