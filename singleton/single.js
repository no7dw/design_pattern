var mySingleton =  (function(){
	var instance;
	function init() {
		var privateVar = "I'm private";
		return 'abc';//return is a must, other wise will logout twice , why?
	};
	return {
		getInstance: function(){
			if(!instance){
				instance = init();
				console.log('this only should log out once');
			}
			return instance;
		}
	}

})();

mySingleton.getInstance();
mySingleton.getInstance();