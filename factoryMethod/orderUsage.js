'use strict'

const dOrder = require('./demandDepositOrder')
const tOrder = require('./timeDepositOrder')

//method1 从参数上判断, 类似处理web req
let handleOrder = function (reqOrder) {
  let _order;
  if (reqOrder.period) {
    _order = new tOrder(reqOrder)
  }
  else {
    _order = new dOrder(reqOrder)
  }
  _order.Confirm()
}

let req = {}
req.body = {number: 10, rateYear: 0.071}
let req2 = {}
req2.body = {number: 10, rateYear: 0.071, period: 90}

handleOrder(req.body)
handleOrder(req2.body)

//method2 从外部直接区分具体类别
let handleOrder2 = function (order) {
  order.Confirm()
}

handleOrder2(new dOrder(req.body))
handleOrder2(new tOrder(req2.body))