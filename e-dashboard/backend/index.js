const express = require('express')
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
const Product = require('./db/Product')
const app = express()

app.use(express.json())
app.use(cors())

app.post("/register", async (req, res) => {
  let user = new User(req.body)
  let result = await user.save()
  result = result.toObject()
  delete result.password // essa função serve para retirar o password
  res.send(result)
})

app.post("/login", async (req, res) => {
  if(req.body.email && req.body.password) {
  let user = await User.findOne(req.body).select("-password")
  // let result = await user.save()
  if(user) {
    res.send(user)
  } else {
    res.send({"result": "No user found"})
  }
  } else {
    res.send({"result": "You need to inform email and password"})
  }
})

app.post("/add-product", async (req, res) => {
  let product = new Product(req.body)
  let result = await product.save()
  res.send(result)
})

app.get("/products", async (req, res) => {
  const products = await Product.find()
  if(products.length > 0) {
    res.send(products)
  } else {
    res.send({result: "No product found"})
  }
})

app.delete("/product/:id", async (req, res) => {
  let result = await Product.deleteOne({_id: req.params.id})
  res.send(result)
})

app.listen(5500)