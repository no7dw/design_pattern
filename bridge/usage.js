'use strict'
const RefinedAbstraction = require('./refinedAbstraction')
const ConcreteImplementorA = require('./concreteImplementorA')
const ConcreteImplementorB = require('./concreteImplementorB')

function init_Bridge() {
  var abstraction = new RefinedAbstraction()
  var state = Math.floor(Math.random()*2)
  if(state)
    abstraction.setImp(new ConcreteImplementorA())
  else
    abstraction.setImp(new ConcreteImplementorB())

  abstraction.Operation()
}

init_Bridge()
