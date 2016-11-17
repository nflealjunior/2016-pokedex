"use strict"

// dependencies
const express = require("express")
const bodyParser = require("body-parser")

// express configuration
const app = express()
app.use(bodyParser.json())
app.use(express.static("public"))

// welcome
app.get('/', function (request, response) {
  response.sendFile('index.html')
})

// poke api

// start server
app.listen(3000, _ => console.log("Server started at 3000"))