// simple sum
/*
function sum(a,... b){
    return a + ...b
}
console.log(sum(2,4,3,4,5,6))

function sum(a, ...args){
    let result = a + args.reduce((accu , curVal) => accu + curVal)
    return result;
}

console.log(sum(1,2,3,4,5))
*/

//Currying in JavaScript transforms a function with multiple arguments into a nested series of functions,
//each taking a single argument. Currying helps you avoid passing the same variable multiple times,
//and it helps you create a higher order function. That is, when we turn a function call sum(1,2,3) into sum(1)(2)(3) .
// currying sum

let sum = function (a) {
  return function (b) {
    return function (c) {
      return function(d){
      return a+b+c+d;
      }
    }
  }
}
let result = sum(1)(2)(3)(4);
console.log(result)

//Why it's useful? Currying helps you to avoid passing the same variable. again and again. It helps to create a higher-order function.
// infinite currying sum with recursion

function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return function (c) {
      if (!c) {
        return a + b
      }
      return sum(a + b + c)
    }
    //console.log(a)
    //console.log(b)
    // return sum(a + b);
  };
}
console.log(sum(1)(3)(4)(5)(6)(4)(5)(6)())
