"use strict"

const util = require('util')
const OperationHelper = require('../lib/apac').OperationHelper

// added by twm
const express = require('express')
const app = express()


let opHelper = new OperationHelper({
    awsId: 'AKIAIWNKYUHJ6V4HDQDA',
    awsSecret: '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',
    assocId: 'barrelon0e-20'
})

const operation = 'ItemSearch'
const params = {
    'SearchIndex': 'Books',
    'Keywords': 'harry potter',
    'ResponseGroup': 'ItemAttributes,Offers'
}

opHelper.execute(operation, params).then((results, responseBody) => {
    console.log(results)
    console.log(responseBody)
}).catch((err) => {
    console.error(err)
})

// or if you have async/await support...

// var dummy = {
// 	image: 'www.someurl.com/image.png',
// 	name: 'Google Home',
// 	price: 99.99,
// 	currency: 'usd',
// 	url: 'www.someurl.com'
// }

var data = {}

app.get('/', function (req, res) {
  res.send(data)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

try {
    let response = await
    opHelper.execute(operation, params)
    console.log(response.results)
    console.log(response.responseBody)
} catch(err) {
    console.error(err)
}

// traditional callback style is also supported for backwards compatibility

opHelper.execute('ItemSearch', {
    'SearchIndex': 'Books',
    'Keywords': 'harry potter',
    'ResponseGroup': 'ItemAttributes,Offers'
}, function (err, results) {
	data = results
	// console.log(results)
	
})