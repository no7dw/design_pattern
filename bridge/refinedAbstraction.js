'use strict'
const Abstraction = require('./abstraction')

class RefinedAbstraction extends Abstraction {
  constructor () {
    super()
    console.log('RefinedAbstraction created')
  }

  setImp (imp) {
    this.imp = imp
  }

}

module.exports = RefinedAbstraction
