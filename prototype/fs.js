var BaseCalculator = function () {
    //为每个实例都声明一个小数位数
    this.decimalDigits = 2;
};
        
//使用原型给BaseCalculator扩展2个对象方法
BaseCalculator.prototype.add = function (x, y) {
    return x + y;
};

BaseCalculator.prototype.subtract = function (x, y) {
    return x - y;
};
