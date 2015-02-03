var basketModule = (function(){
	var basket = [];
	function doSomethingPrivate(){

	};
	function doSomethingElsePrivate(){

	};

	return {
		addItem: function(value){
			basket.push(value);
		},
		getItemClassCount: function(){
			return basket.length;
		},
		getItemCount: function(){
			var itemCount = this.getItemClassCount(), total = 0;
			while(itemCount--){
				total += basket[itemCount].count; 
			}
			return total;
		},
		doSomething: doSomethingPrivate,
		getTotal: function(){
			var itemCount = this.getItemClassCount(), total = 0;
			while(itemCount--){
				total += basket[itemCount].price*basket[itemCount].count; 
			}
			return total;

		}
	};
})();

basketModule.addItem({
	item:'bread',
	price:5,
	count:3
});
basketModule.addItem({
	item:'fish',
	price:50,
	count:2
});

console.log("ClassCount" + basketModule.getItemClassCount());
console.log("Count" + basketModule.getItemCount());

console.log( "$ " + basketModule.getTotal());
