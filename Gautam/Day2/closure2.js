function range(x,y){
  var count=x;
  return {
    next : function () {
      if(this.hasNext()){
        return count++
      }
    },
    hasNext: function(){
      if (count < y)
        return true
      else 
        return false
    }


    }
  
}
// even though object is returned (outer function) , inner function is referred n it uses outer function variables -- closure
var x = range(0,10);
while(x.hasNext()){
console.log(x.next());
}
