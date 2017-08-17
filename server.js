const express = require('express')
const path = require('path')
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

const app = express()
const port = 3000

// let destination = fs.createWriteStream('./downloads/google2.html')
// let url = 'https://google.com'
// request(url)
// .pipe(destination)
// .on('finish', function(){
//   console.log('done')
// })
// .on('err', function(err){
//   console.log(err)
// })

//ei 3

let url = 'http://archive.thedali.org/mwebcgi/mweb.exe?request=record;id=169;type=101'
let destination = fs.createWriteStream('./downloads/dali.txt')

request(url, function(err, res, body) {
  let $ = cheerio.load(body)
  let details = $('.details dl')
  let detailsText = details.text()
  let key = ''
  let value = ''
  let obj = {}
  details.children().each((i, node) => {
    ;`$(dt) space $(dd)`
    if (node.name === 'dt') {
      value = $(node).text()
    } else {
      key = $(node).text()
    }
    if (key !== '' && value !== '') {
      obj[key] = value
      key = ''
      value = ''
    }

    //console.log(node.name, $(node).text())
  })
  console.log(obj)
})
// }).pipe(destination)
// .on('finish', function(){
//   console.log('done')
// })
// .on('err', function(err){
//   console.log(err)
// })
app.listen(port)
console.log(`server is listening on port ${port}`)
