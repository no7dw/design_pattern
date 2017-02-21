module.exports = {
  waterfall: {
    order:[
    'step0',
    'step1',
    'step2',
    'step3',
    'step4'
    ],

    step1: function(){
      console.log('step1')
    },

    step2: function(){
      console.log('step2')
    },
    
    step3: function(){
      console.log('step3')
    },
     
  }
}