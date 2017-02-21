
Function.prototype.before = function(beforefn) {
  var self = this
  return function(){
    beforefn.apply(this, arguments)
    return self.apply(this, arguments)
  }
}

Function.prototype.after = function(afterfn) {
  var self = this
  return function(){
    afterfn.apply(this, arguments)
    return self.apply(this, arguments)
  }
}

var func = function(){
  console.log('normal')
}
func = func.before(function(arg){
  console.log('before func', arg)
}).after(function(arg){
  console.log('after func',arg)
})

func({'name':'wade', 'dept': 'dev'})
