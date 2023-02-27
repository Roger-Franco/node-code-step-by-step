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

app.post("/", (req, res) => {
  // const data = {title: 'guerra e paz', pageqty: 880}
  const data = req.body
  conn.query("INSERT INTO books SET?", data, (error, results, fields) => {
    if(error) throw error;
    res.send(results)
  })
})

  app.listen(5500)