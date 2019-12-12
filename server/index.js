const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router.js')

const port = 3007
const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.use('/', express.static(path.join(__dirname, '../client/dist')))
server.use('/api', router)

server.listen(port, () => console.log("listen to 3007"));