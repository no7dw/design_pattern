'use strict'

const Implementor = require('./implementor')

class ConcreteImplementorA extends Implementor {
  constructor () {
    super()
    console.log('ConcreteImplementorA created')
  }

  OperationImp () {
    console.log('ConcreteImplementorA OperationImp')
  }
}
module.exports = ConcreteImplementorA
