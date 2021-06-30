//向exports对象中添加属性，然后暴露出去

exports.foo = function(){
  console.log('foo() module3')
}

exports.bar = function(){
  console.log('bar() module3')
}

exports.arr = [1,2,3,4,2,1]