
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
    self.apply(this, arguments)
    return afterfn.apply(this, arguments)
  }
}

var func = function(){
  console.log('normal')
}

var bfunc = function(arg){  console.log('before func', arg) }
var afunc = function(arg){  console.log('after func', arg) }

func = func.before(bfunc).after(afunc)

func({'name':'wade', 'dept': 'dev'})
