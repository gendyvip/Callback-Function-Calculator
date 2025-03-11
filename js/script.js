var add = function (x,y) {
    return x+y
}
var multiply = function (x,y) {
    return x*y
}
var division = function (x,y) {
    if(y==0)
        alert("Cant divide on 0")
    else
    return x/y
}
var substract = function (x,y) {
    return x-y
}

function applyOperation(x,y,myFunc){
    return myFunc(x,y)
}
console.log(applyOperation(5,3,add))
console.log(applyOperation(5,3,multiply))
console.log(applyOperation(10,2,division))
console.log(applyOperation(10,2,substract))