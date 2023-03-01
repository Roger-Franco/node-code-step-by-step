const express = require('express')
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
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

app.listen(5500)