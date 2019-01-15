const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('IN')
  next()
  console.log('OUT')
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000);
