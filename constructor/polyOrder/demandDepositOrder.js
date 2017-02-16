'use strict'

const timeDepositOrder = require('./timeDepositOrder')

class demandDepositOrder extends timeDepositOrder {
  constructor(args){
    super(args)
  }

  Confirm(){
    console.log('demandDepositOrder confirmed', this.args)
  }

}
module.exports = demandDepositOrder