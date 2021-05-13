const express = require('express')
const app = express()
const port = process.env.port || 3000;


//Muhannad going to sucess 

app.get('/', (req, res) => {
  res.send('Welcome to Muhannad Gaming Rig App!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})