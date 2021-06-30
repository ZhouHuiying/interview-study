//定义一个有依赖的模块
(function (window,dataService){
  let name = 'alterer.js';
  function showName(){
    console.log(name,dataService.getName())
  }
  window.alterer = {showName}
})(window,dataService)