'use strict'

const dOrder = require('./demandDepositOrder')
const tOrder = require('./timeDepositOrder')

//method1 从参数上判断
let handleFactoryOrder = function(order){
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

//method2 从外部直接区分具体类别
let handleFactoryOrder2 = function(order){
  order.Confirm()
}

let req = {}
req.body = {number:10, rateYear : 0.071}
req.body1 = {number:10, rateYear : 0.071, period:90}
handleFactoryOrder2( new dOrder(req.body))
handleFactoryOrder2( new tOrder(req.body1))