const dbConnect= require('./mongodb')


const main =  async () => {
  let data = await dbConnect();
  data = await data.find({name:'nord'}).toArray();
  console.log(data);
}
main()
