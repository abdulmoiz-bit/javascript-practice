//Destructuring
/*
let a,b;
[a,b] = [35,90];
console.log(a,b);

[a,b,c,...d] = [1,2,3,4,5,6,7,8,9,10];
console.log(a,b,c,d);

({a,b,c, ...d }= {a:34 , b:67, c:90, d:45, e:21})
console.log(a,b,c,d);

*/
//Array Destructuring
/*
const fruits = ['apple', 'banana', 'orange'] ;
[a,b,c] = fruits;
console.log(a,b,c);


//Object Destructuring

laptop= {
    model : "dell",
    age :  3,
    gender : "male",
    start : function()
    { console.log("started")
     }
}

const {model, age, gender, start} = laptop;
console.log(model, age, gender, start);
//start.laptop={chip: "newchip"} //apni taraf se

console.log(laptop);

*/


const student = {
    name1: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    },
    age: 7,
    height: "5 and 6"
}

// We define 3 local variables: name, maths, science
const { name1, scores: {maths, science = 50}, age, height } = student;

document.write(`${name1} scored ${maths} in Maths and ${science} in Elementary Science and age is ${age} height is ${height}`);
console.log(student);
//const { name, scores: {maths, science = 60} } = student;