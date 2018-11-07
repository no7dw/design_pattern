class BaseTradeRisk {
	constructor() {
		let nextSuccessor = null
	}
	process(){
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
	drk.process()
	
}
ProcessRiskManager()
//TODO: pass init value in DataRisk/OrderRisk/MarketRisk in constuctor

