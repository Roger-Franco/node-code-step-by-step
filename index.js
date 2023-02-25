const express = require('express') 
const EventEmitter = require('events') 
const event = new EventEmitter() 
const app = express() 

// o event emitter soluciona quando precisamos de uma especie de evento de clique em nodeJs

let  count = 0
event.on("countApiRequest", () => {
  count ++
  console.log("API Request count is :" + count);
})

app.get("/", (req, res) => {
  res.send("basic api")
  event.emit("countApiRequest")
})

app.get("/update", (req, res) => {
  res.send("update api")
  event.emit("countApiRequest")
})

app.get("/search", (req, res) => {
  res.send("search api")
  event.emit("countApiRequest")
})

app.listen(5500)