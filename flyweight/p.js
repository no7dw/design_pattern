class Products {
	static productList = [] //需支持static property 的node 版本 
 	add(){}
	remove(key){}
	update(key){}
	get(key){}
	init(){
		this.productList = Model('Product').findAll()
	}
}
// old version syntax
//Product.productList = []

class InventorySystem {
	constructor(){
		plist = new Products()
		pl.init()
		//orders #list of order
	}
	executeOrder(productName, int orderNumber){
		order = new Order(orderNumber , pl.get(productName))
		orders.add(order)
	}
}

