 function foo() {
 			this.property = 1;
            this.add = function (x, y) {
                return x + y;
            }
        }

foo.prototype.add = function (x, y) {
    return x + y + 10;
}
foo.prototype.property = 2;

Object.prototype.subtract = function (x, y) {
    return x - y;
}

var f = new foo();
console.log(f.property);//1 not 2
console.log(f.add(1, 2)); //结果是3，而不是13
console.log(f.subtract(1, 2)); //结果是-1