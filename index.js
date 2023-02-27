const express = require('express')
const conn = require('./config')

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  conn.query("select * from books", (error, result) => {
    if(error) {
       res.send("error in api", error)
      }else { 
        res.send(result)
      }
  }) 
})

  app.listen(5500)