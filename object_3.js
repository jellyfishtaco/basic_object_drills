function keyDeleter(o) {
  
  
  var obj2 = Object.assign({}, o)
  delete obj2.foo;
  delete obj2.bar;
  
  return obj2;
  
  
}


var sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang'
};

