const express = require('express')
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
const Product = require('./db/Product')
const ObjectId = require('mongoose').Types.ObjectId // Solucao - minha, peguei no meu git - getapet - para o id da busca do produto

const Jwt = require('jsonwebtoken')
const jwtkey = '-ecomm'

const app = express()

app.use(express.json())
app.use(cors())

app.post("/register", async (req, res) => {
  let user = new User(req.body)
  let result = await user.save()
  result = result.toObject()
  delete result.password // essa função serve para retirar o password
  Jwt.sign({result}, jwtkey, {expiresIn: "2h"}, (err, token) => {
    if(err) {
      res.send({"result": "Something went wrong, please try after sometime"})
    }
    res.send({ result, auth: token })

  })
})

app.post("/login", async (req, res) => {
  if(req.body.email && req.body.password) {
  let user = await User.findOne(req.body).select("-password")
  // let result = await user.save()
  if(user) {
    Jwt.sign({user}, jwtkey, {expiresIn: "2h"}, (err, token) => {
      if(err) {
        res.send({"result": "Something went wrong, please try after sometime"})
      }
      res.send({ user, auth: token })

    })
  } else {
    res.send({"result": "No user found"})
  }
  } else {
    res.send({"result": "You need to inform email and password"})
  }
})

app.post("/add-product", verifyToken, async (req, res) => {
  let product = new Product(req.body)
  let result = await product.save()
  res.send(result)
})

app.get("/products", verifyToken, async (req, res) => {
  const products = await Product.find()
  if(products.length > 0) {
    res.send(products)
  } else {
    res.send({result: "No product found"})
  }
})

app.delete("/product/:id", verifyToken, async (req, res) => {
  let result = await Product.deleteOne({_id: req.params.id})
  res.send(result)
})

app.get("/product/:id", verifyToken, async (req, res) => {
  // let result = await Product.findOne({_id: req.params.id}) => nao funciona muito bem
  const id = req.params.id
  /* O codigo abaixo tirei do meu git hub (getapet) */  
  // check if id is valid
  if(!ObjectId.isValid(id)) {
    res.status(422).json({message: 'ID inválido!'})
    return
  }
  let result = await Product.findById(id)
  /* O codigo acima tirei do meu github (getapet) */  
  if(result) {
    res.send(result)
  } else {
    res.send({"result": "product No found"})
  }
})

app.put("/product/:id",verifyToken,  async (req, res) => {
  let result = await Product.updateOne({_id: req.params.id}, {$set:req.body})
  res.send(result)
})

app.get("/search/:key", verifyToken, async (req, res) => {
  let result = await Product.find({
    "$or":[
      {
        name:{$regex:req.params.key}
      },
      {
        company:{$regex:req.params.key}
      },
      {
        category:{$regex:req.params.key}
      }
    ]
  })
  res.send(result)
})

function verifyToken(req, res, next) {
  // console.log(req.headers['authorization']);
  let token = req.headers['authorization']
  if (token) {
    token = token.split(' ')[1]
    Jwt.verify(token, jwtkey, (err, success) => {
      if(err) {
        res.status(401).send({result: 'Please provide a valid token'})
      } else {
        next()
      }
    })

    console.log(token);
  } else {
    res.status(403).send({result: 'Please provide a token'})
  }
}

app.listen(5500)