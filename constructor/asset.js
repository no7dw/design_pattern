'use strict'

class Asset{

  constructor(number, price){    
    this.number = number
    this.price = price
    console.log(this.number, this.price)
  }

  getCurrentValue(){
    return this.number * this.price
  }
}

module.exports = Asset
