
   
function add(a,b) {
    return a+b
    
    }
    
    
    function once(func) {
    let res;
    return function (a,b) {
    
    if(res){
        return res
    }
      else {
        res = func.call(this, a, b)
        return res
    }
    }
    }
    let onceadd = once(add) 
    
    alert(onceadd(1,2))
    alert(onceadd(3,5))