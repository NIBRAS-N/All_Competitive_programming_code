const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
console.log(process.env.PORT)

const abc = {
    "name":"nibras",
    "age": 30,
    "email": "nibrasnib1627@gmail.com"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/nibras', (req,res)=>{
    res.send('from nibras page')
})

app.get("/my_json", (req,res)=>{
    res.send(abc);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})