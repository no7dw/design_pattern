
var _ = require('lodash')
config = require('./config')
config_default = require('./config.default')
module.exports = {
  load: function (app){
    _.each(config.waterfall.order, function(orderKey) {

      if(config.waterfall[orderKey])
        config.waterfall[orderKey](app)
      else //undefined , then load config.default
        config_default.waterfall[orderKey](app)
    })
   }
}
