'use strict'
const ConcreteClass = require('./lotteryAct')

function init_TemplateMethod () {

  // this is load and match before via db query
  let actCond = {
    actId: '51abcde321',
    purchaseCond:  {'$gt': 100}, // or just 100
    withdrawCond:  {'$lt': 0}, // or just 0
    name: '存满100不提现'
  }
  const act = new ConcreteClass(actCond)
  let userId = '52abc4321'
  act.TemplateMethod(userId)
}

init_TemplateMethod()