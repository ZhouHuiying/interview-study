//定义一个有依赖的模块
define(['dataService','jquery'],function(dataService,$){
  let msg = 'alterer.js'
  function showMsg(){
    console.log(msg, dataService.getName())
  }
  $('body').css('background','pink')
  return {showMsg}
})