import RiskProxy from './RiskProxy'

class ReportFactory {
    getReport(){}
    RiskProcess(){}
}

class TongdunReportFactory extends ReportFactory{
    getReport(){
        return new TongdunDecision()
    }
}

class BaiqishiReportFactory extends ReportFactory{
    getReport(){
        return new BaiqishiDecision()
    }
}

// src/credit$ grep async.*Baiqishi CreditService.ts
// async queryBaiqishi () {
//     async queryBaiqishiInfo4User ({ userId, isRisk = false }: {userId: string, isRisk?: boolean}) {
//     async queryBaiqishiInfo4UserRisk ({userId}) {
//     async report4Baiqishi (isReportAll) {

// src/credit$ grep async.*Tong CreditService.ts
// async checkMnoInfoTongDun ({user}) {
// async queryTongdunFlows ({ userId, type, taskId }) {
// async getTongdunFlowsByRisk ({userIds, type}) {
// async setTongdunTbFlowExpired () {

class CreditReport {
    queryUserRiskReport(userid){}
    setReportExpired(userid){}
}
class TongdunDecision extends CreditReport{
    queryUserRisk(userid){
        req.post(userId, 'www.tongdun.com/report/')
    }
    setReportExpired(userid){}
}
class BaiqishiDecision extends CreditReport {
    queryUserRisk(userid){
        req.post(userId, 'www.baiqishi.com/report/')
    }
    setReportExpired(userid){}

}

function LoanRiskProcessor(userid){

    let f = new BaiqishiReportFactory()
    // let f = new TongdunReportFactory()
    let queryReport = f.getReport()
    let report = queryReport.queryUserRisk(userId)
    f.RiskProcess(report)
}

LoanRiskProcessor('5xb')
