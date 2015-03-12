// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();
//   this.getName = function() {
//     return this.name;
//   };

//   this.getMessage = function() {
//     return this.message;
//   };
// }
// console.log((new MyObject('wade','hello')).getName());

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};
console.log((new MyObject('wade','hello')).getName());