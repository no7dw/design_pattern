'use strict'

const Implementor = require('./implementor')

class ConcreteImplementorB extends Implementor {
  constructor () {
    super()
    console.log('ConcreteImplementorB created')
  }

  OperationImp () {
    console.log('ConcreteImplementorB OperationImp')
  }
}
module.exports = ConcreteImplementorB
