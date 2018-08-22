'use strict'

const Asset = require('./asset')

class stockAsset extends Asset {

  constructor(number, price, buyPrice){
    super(number, price)
    this.buyPrice = buyPrice
  }

  getCurrentValue(){
    // return super.getCurrentValue()
    return this.number * (this.price - this.buyPrice)
  }
}
module.exports = stockAsset