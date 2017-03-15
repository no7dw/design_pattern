'use strict'
const AbstractActClass = require('./baseAct')

class ConcreteActClass extends AbstractActClass {
  constructor (cond) {
    super(cond)
    console.log('ConcreteClass created')
  }

  //this will override the father baseAct checkUserExists method
  checkUserExists (userId) {
    console.log('ConcreteClass user exists ' + userId)
    return true
  }

  reward (userId) {
    console.log('reward user:', userId)
  }
}

module.exports = ConcreteActClass