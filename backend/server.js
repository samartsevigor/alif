const express = require('express')
const dishes = require('./dishes.js')

const server = express()
const PORT = process.env.PORT || 8000
server.get('/api/dishes', (req, res) => {
  res.json(dishes)
})

server.get('/api/dishes/:id', (req, res) => {
  const dish = dishes.find((el) => el.id === +req.params.id)
  res.json(dish)
})

server.listen(PORT, () => {
  console.log(`Server is running. Port: 8000`)
})
