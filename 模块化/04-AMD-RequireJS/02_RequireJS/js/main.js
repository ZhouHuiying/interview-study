(function(){
  requirejs.config({
    baseUrl:'js/',
    paths:{ //配置路径
      dataService:'./modules/dataService',
      alterer:'./modules/alterer',
      jquery:'./libs/jquery-1.10.1',
      angular:'./libs/angular'
    },
    
  })

  requirejs(['alterer','angular'], function(alterer){
    alterer.showMsg()
    console.log(angular)
  })
})()