'use strict'

const Asset = require('./asset')

class stockAsset extends Asset {

  constructor(number, price, buyPrice){
    super(number, price)
    // this.number = number
    // this.price = price
    this.buyPrice = buyPrice
    console.log(this.number, this.price, this.buyPrice)
  }

  getCurrentValue(){
    return this.number * (this.price - this.buyPrice)
  }
}
module.exports = stockAsset