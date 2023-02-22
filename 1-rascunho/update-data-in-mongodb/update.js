const dbConnect = require('./mongodb')

const updateData = async () => {
  let data = await dbConnect()
  // let result = await data.updateOne({name: 'max 7'}, {$set:{name: 'max pro 7'}})
  let result = await data.updateMany({name: 'max 5'}, {$set:{name: 'max pro 5', price: 320}})
  console.log(data);
  // if(result.acknowledged) {
  //   console.warn("data is inserted")
  // }
}

updateData()