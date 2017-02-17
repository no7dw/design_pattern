'use strict'

const dOrder = require('./demandDepositOrder')
const tOrder = require('./timeDepositOrder')

//method1
var handleFactoryOrder = function(order){
  let _order;
  if(order.period){
    _order = new tOrder(order)
  }
  else {
    _order = new dOrder(order)
  }
  _order.Confirm()
}
handleFactoryOrder( {number:10, rateYear : 0.071})
handleFactoryOrder( {number:10, rateYear : 0.071, period:90})

//method2
var handleFactoryOrder2 = function(order){
  order.Confirm()
}
handleFactoryOrder2( new dOrder({number:10, rateYear : 0.071}))
handleFactoryOrder2( new tOrder({number:10, rateYear : 0.071, period:90}))