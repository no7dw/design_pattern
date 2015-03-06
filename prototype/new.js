
function DOG(name){
    this.name = name;
    this.species = '犬科';
};

var dogA = new DOG('大毛');
var dogB = new DOG('二毛');

dogA.species = '猫科';
console.log(dogB.species); // 显示"犬科"，不受dogA的影响


function Cat(name,color){
    this.name = name;
    this.color = color;
};
// share memory
Cat.prototype.type = "猫科动物";
Cat.prototype.eat = function(){
	console.log('eat mouse');
};

var catA = new Cat('3毛','red');
var catB = new Cat('4毛','yellow');
catA.type = '虎科动物'
console.log(catA.type);//'虎科动物'
console.log(catA.type);//'虎科动物'
catA.eat();