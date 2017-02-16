'use strict'

const dOrder = require('./demandDepositOrder')
const tOrder = require('./timeDepositOrder')

var save = function(order){
  order.Confirm()
}
save( new dOrder({number:10, rateYear : 0.071}))
save( new tOrder({number:10, rateYear : 0.071, period:90}))
