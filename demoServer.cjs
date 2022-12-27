const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Hello world!")
})

app.get('/user', (req, res) => {
  res.send("Hi user")
})

app.get('/user/:id', (req, res) => {
  const id = req.params.id
  res.send("Hi User " + id)
})

app.get('/download', (req, res) => {
  res.download('./index.js');
})

app.listen(port, (req, res) => {
  console.log("Running...")
})