var myNamespace = (function(){
	var myPrivateVar = 0;
	var myPrivateMethod = function(foo){
		console.log(foo);
		console.log(myPrivateVar);
	};

	return {
		myPublicVar : "foo",
		myPublicFunction: function (bar){
			myPrivateVar++;
			myPrivateMethod(bar);
		}
	};
})();

console.log(myNamespace.myPublicVar);
myNamespace.myPublicFunction("ab");
myNamespace.myPublicFunction("abcd");
//when unneed
myNamespace  = null;