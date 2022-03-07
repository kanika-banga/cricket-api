const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const countrydata = require("./jsondata/country.json")
const odidata = require("./jsondata/odi.json")
const livescore = require("./jsondata/livescore.json")
const Head2Head = require("./jsondata/h2h.json")
const Stadiumdata = require("./jsondata/stadium.json")
const app = express()
app.use(express.json())

app.get("/",function(req,res){
  res.send({msg:"server work"})
})

app.get("/countries",function(req,res){
  res.send({countrydata})
})
app.get("/odi",function(req,res){
  res.send({odidata})
})

app.get("/livescore",function(req,res){
  res.send({livescore})
})
app.get("/getstadium",function(req,res){
  res.send({Stadiumdata})
})

app.get("/Head2Head",function(req,res){
  res.send({Head2Head})
})

app.listen(PORT,()=>{
  console.log("Server running on Port "+ PORT)
})