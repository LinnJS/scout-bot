const express = require('express')
const path = require('path')
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

const app = express()
const port = 3000

// ei 1
// let url = "https://google.com"
// request(url, function(err, res, body){
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(body)
//   }
// })

//ei 2
let destination = fs.createWriteStream('./downloads/google2.html')
let url = 'https://google.com'
request(url)
.pipe(destination)
.on('finish', function(){
  console.log('done')
})
.on('err', function(err){
  console.log(err)
})



app.listen(port)
console.log(`server is listening on port ${port}`)
