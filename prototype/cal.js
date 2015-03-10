var BaseCalculator = function() {
    console.log('new BaseCalculator() called');
    this.decimalDigits = 2;
};

BaseCalculator.prototype = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    }
};

var Calculator = function () {
    //为每个实例都声明一个税收数字
    this.tax = 5;
    console.log('Calculator constructor 1');
};
        
Calculator.prototype = new BaseCalculator();


var calc = new Calculator();
console.log(calc.add(1, 1));
//BaseCalculator 里声明的decimalDigits属性，在 Calculator里是可以访问到的
console.log(calc.decimalDigits); 

console.log("\n--------");
var Calculator = function () {
    this.tax= 5;
    console.log('Calculator constructor 2');
};
//this won't call BaseCalculator()
Calculator.prototype = BaseCalculator.prototype;

var calc = new Calculator();
console.log(calc.add(1, 1));
//BaseCalculator 里声明的decimalDigits属性，在 Calculator里是访问不到到
//undefined
console.log(calc.decimalDigits); 


console.log("\n--------");
//覆盖前面Calculator的add() function 
Calculator.prototype.add = function (x, y) {
    return x + y + this.tax;
};

var calc = new Calculator();
console.log("with tax",calc.add(1, 1));



