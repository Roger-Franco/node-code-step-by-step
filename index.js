const express = require('express')
require('./config')
const Product = require('./product')
const app = express()

app.use(express.json())

app.post('/create', async (req, res) => {
  let data = new Product(req.body)
  const result = await data.save()
  res.send(result)
})

app.get('/list', async (req, res) => {
  let data = await Product.find()
  res.send(data)
})

app.delete('/delete/:_id', async (req, res) => {
  // console.log(req.params)
  let data = await Product.deleteOne(req.params) // desse jeito (_id) será enviado a chave e o dado ex: ({_id: id})
  res.send(data)
})

app.put('/update/:_id', async (req, res) => {
  let data = await Product.updateOne(
    req.params, // desse jeito (_id) será enviado a chave e o dado ex: ({_id: id})
    {$set: req.body}
    )
  res.send(data)
})

app.listen(5500)
