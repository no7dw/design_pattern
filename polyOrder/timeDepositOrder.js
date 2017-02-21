'use strict'

class timeDepositOrder {
  constructor(args){
    this.args = args
  }

  Confirm(){
    //save()
    console.log('timeDepositOrder confirmed', this.args)
  }

}
module.exports = timeDepositOrder
