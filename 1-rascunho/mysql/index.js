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

app.put("/:id", (req, res) => {
  const id = req.params.id
  const title = req.body.title
  const pageqty = req.body.pageqty
  const sql = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = '${id}'`
  conn.query(sql, (error, results, fields) => {
    if(error) throw error;
    res.send(results)
  })
})

app.delete("/:id", (req, res) => {
  const id = req.params.id
  // const sql = `DELETE FROM books  WHERE id = '${req.params.id}'`
  conn.query(`DELETE FROM books  WHERE id = '${req.params.id}'`, (error, results) => {
    if(error) throw error;
    res.send(results)
  })
})

  app.listen(5500)