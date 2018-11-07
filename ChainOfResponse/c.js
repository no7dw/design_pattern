
//TODO: pass init value in DataRisk/OrderRisk/MarketRisk in constuctor
class BaseTradeRisk {
	constructor() {
		let nextSuccessor = null
	}
	process(){ //注意这个封装,判断处理结果，并交棒给下一个
	  if(this.doProcess()){
		if(this.nextSuccessor){
			this.nextSuccessor.process()
		}
	  }
	}
	doProcess(){}
	setSuccessor(successor){
	   this.nextSuccessor = successor
	}
}
class DataRisk extends BaseTradeRisk {
	doProcess(){
		console.log('Data risk process ')
		return true //if return false , no need to continue
	}
}

class MarketRisk extends BaseTradeRisk {
	doProcess(){
		console.log('Market risk process ')
		return true
	}
}

class OrderRisk extends BaseTradeRisk {
	doProcess(){
		console.log('Order risk process ')
		return true
	}
}

function ProcessRiskManager(){
	let drk = new DataRisk()
	let mrk = new MarketRisk()
	let ork = new OrderRisk()
	drk.setSuccessor(mrk)
	mrk.setSuccessor(ork)
	drk.process() //只需要triger once
	
}
ProcessRiskManager()

//Comment: 你也可以不用这个模式
// drk.doProcess()
// mrk.doProcess()
// ork.doProcess()
// 但如果需要知道上一个的true false 决定是否继续就稍微麻烦
// if(drk.doProcess()) {
//	if(mrk.doProcess()) {...}
// }
