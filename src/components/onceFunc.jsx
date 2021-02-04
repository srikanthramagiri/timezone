
   
const once = function (func) {
    var resposne;
    return function () {
        if (func) {
            resposne = func.apply(this, arguments);
            func = null;
        }
        return resposne;
    }
};
function add(a, b) {
    return a + b;
 }
const onceAdd = once(add);

alert(onceAdd(2, 1));
alert(onceAdd(3, 4));