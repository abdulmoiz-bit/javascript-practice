// playing with loops e.g (for_loops, while_loop, do-while_loop)

let number = 234
let string = "moiz rashid"
let array = [1,2,3,4]
let array1 = [5,6,7,8]
let object = {
    id: 1,
    name: "moiz",
    fname: "rashid",
    sector: "31 d"
}

let num = 0;
const calc = (n) =>{
    for(let i = 0; i <= n; i++){
        console.log(i)
        num= num +i;
        console.log(num)
    }
    return num;
}

console.log(calc(15))




