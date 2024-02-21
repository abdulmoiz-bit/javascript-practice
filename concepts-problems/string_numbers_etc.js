let number = 234
let string = "moiz rashid"

for (let n of string ){
    console.log(n)
}

let spy = {
    name: "moiz"
}
console.log(Object.keys(spy).forEach(function(key)
{
     spy[key] = "redacted"
 }));