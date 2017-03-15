'use strict'

class AbstractActClass {
  constructor (cond) {
    console.log('AbstractClass created', cond)
    this.purchaseCond = cond.purchaseCond
    this.withdrawCond = cond.withdrawCond
    this.name = cond.name
    this.actId = cond.actId
  }

  TemplateMethod (userId) {
    this.checkUserExists(userId)
    this.checkActOn()
    this.checkUserHasPurchase(userId)
    this.checkUserHasWithdraw(userId)
  }

  checkUserExists (userId) {
    console.log('user exists ' + userId)
  }

  checkActOn () {
    console.log(this.actId, this.name, ' status is on')
    return true
  }

  checkUserHasPurchase (userId) {
    console.log(userId, this.purchaseCond, ' match')
    return true
  }

  checkUserHasWithdraw (userId) {
    console.log(userId, this.withdrawCond, ' match')
    return true
  }
}

module.exports = AbstractActClass