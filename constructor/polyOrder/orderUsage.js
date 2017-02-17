'use strict'

const dOrder = require('./demandDepositOrder')
const tOrder = require('./timeDepositOrder')

var handleOrder = function(order){
  let _order;
  if(order.period){
    _order = new tOrder(order)
  }
  else {
    _order = new dOrder(order)
  }
  _order.Confirm()
}
handleOrder( {number:10, rateYear : 0.071})
handleOrder( {number:10, rateYear : 0.071, period:90})
