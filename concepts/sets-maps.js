let sample2 = new Set();
sample2.add("Hello");
sample2.add(1)
sample2.add("Bye")
sample2.add("@");
sample2.add("@");

console.log(sample2)

let sample = new Set([1,2,3,4,5])
console.log(sample)

let moiz = new Map([["name", "moiz"], ["father", "rashid"]]);
//moiz.set("name", "hasnain")
console.log(moiz)

let moiz2 = new Map([
    ["name", "hasnain"]
    ])
console.log(moiz2)

let samp = new WeakSet();
let con ={"name" : "hasnain"};
samp.add(con)
console.log(samp.has(con))

let camp = new WeakMap();
let son = {"name": "hasnian"}
camp.set(son)
console.log(camp.has(son))


