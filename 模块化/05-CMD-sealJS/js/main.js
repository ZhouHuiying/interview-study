define(function(require){
  let module1 = require('./modules/module1')
  console.log(module1.foo())
  
  let module4 = require('./modules/module4')
  module4.fun2();
})