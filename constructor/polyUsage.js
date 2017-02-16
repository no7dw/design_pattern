'use strict'

const Asset = require('./asset')
const stockAsset = require('./stockAsset')

let a = new Asset(2,3)
console.log(a.getCurrentValue())
let s = new stockAsset(2,3,1)
console.log(s.getCurrentValue())
