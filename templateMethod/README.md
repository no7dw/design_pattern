#template method

![template](http://www.dofactory.com/images/diagrams/net/template.gif)

每个活动都是有一系列判断、一系列流程，可以将其抽象成为一个模板流程


```
  handleLottery(user_id, callback) {
    if (!this.isLuckyToday(user_id)) return callback(MessageUtil.getMessage('today_not_monday'));
    let _this = this;
    let logUtil = this.getLogUtil(user_id);
    Thenjs(checkUser)
      .then(checkWithdraw)
      .then(checkLotteryRecord)
      .then(setRecord)
      .then(function (cont, result) {
        logUtil.log('handleLottery done');
        callback(null, result);
      })
      .fail(function (cont, err) {
        logUtil.log('handleLottery err', err);
        callback(err);
      });
```

改进后，只需要每次都是调用模板方法：
```
  const act = new ConcreteClass(actCond)
  let userId = '52abc4321'
  act.TemplateMethod(userId) //关键

```    
  