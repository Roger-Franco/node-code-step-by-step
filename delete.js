const dbConnect = require('./mongodb')

const deleteData = async () => {
  let data = await dbConnect()
  let result = await data.deleteOne({name: 'max 7 '})
  // let result = await data.deleteMany({name: 'max 6'})

  console.log(result);
  if(result.acknowledged) {
    console.warn("data is deleted")
  }
}

deleteData()