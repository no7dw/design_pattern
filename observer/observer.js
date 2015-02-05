function ObserverList(){
	this.ObserverList = [];
}
ObserverList.prototype.Add = function(obj) {
	return this.ObserverList.push(obj);
};
ObserverList.prototype.Count = function() {
	return this.ObserverList.length;
};
ObserverList.prototype.Get = function(index) {
	return this.ObserverList[index];
};

function extend(obj, extension){
	for(var key in obj){
		// console.log(obj, key);
		extension[key] = obj[key];
	}
};

function Subject(){
	this.observers = new ObserverList();
}
Subject.prototype.AddObserver = function(observer) {
	this.observers.Add(observer);
};

Subject.prototype.Notify = function(context) {
	var observerCount = this.observers.Count();
	for(var i = 0; i< observerCount; i++){
		this.observers.Get(i).Update(context);
	};
};

function Observer(){
	this.Update = function(context){
		console.log(context);
	}
};
