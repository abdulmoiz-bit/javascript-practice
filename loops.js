LOOPS

var ourArray = [];
for(var i = 0; i<5; i++){
    if (i>3) break;
    ourArray.push(i)
}
console.log(ourArray);

//NESTED LOOP

var arr= [
   [1,2],[3,4],[5,6]
];

for(var i=0; i < arr.length; i++){
  for(var j=0; j < arr[i].length; j++){
    console.log(arr[i][j]);
  }

}

for (var a = 1; a<=100; a = a+10){
    for (var b = a; b < a+10; b++){
        document.write(b);
    }
      document.write("<br>");
}



 let i = 0;
    for(i=0; i<3;i++){
        console.log(i);
    }

    let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "SkillF"];
    for (let index = 0; index < friends.length; index++) {
        console.log("Hello friend, " + friends[index]);
    }

    friends.forEach(function f(element){
        console.log("Hello Friend, " + element + " to modern JavaScript");
    });

    for (element of friends){
        console.log("Hello Friend, " + element + " to modern JavaScript again");
    }

    let employee = {
        name: "Harry",
        salary: 2,
        channel: "CWH"
    }

    
   // while loop in js
    let i =0;
    while(i<4){
        console.log(`${i} is less than 4`);
        i++;
    }
    
    //do while loop in js
    let j =34;
    do{
        console.log(`${j} is less than 4 and we are inside do while loop`);
        j++;
    }while(j<4);












//*******where to use for in and for of loop ************



console.log("This is tutorial 56 on for-in and for-of loops");

let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];


//**********For in loop*******

//Traditional for loop:
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);   
}


//1. ITERATING AN OBJECT
let obj = {
    name: "Harry",
    language: "JavaScript",
    hobbies: "Android app development"
}
console.log(obj);
//1.1 Iterating an object using Traditional for loop:
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);   
}

//1.2 Iterating an object using for-in loop:
for (let key in obj){
    console.log(obj[key]);
}

//2. ITERATING A STRING
//We can use for in with strings to loop through all the characters
myString = "This is my string";
for (let char in myString){
    console.log(myString[char]);
}

//Quiz: Use traditional for loop to iterate through the same string



//FOR WHILE DOWHILE

for(let i=0; i=100; i++){
   console.log(i);
}
/*
let j=0;
while(j<100){
    console.log(j);
    j+=1;
    j++;
}
*/
let k = 110;

do {
  console.log(k + 1);
  if (k === 5) {
    k += 1;
    continue;
  }
  k += 1;
} while (k < 10);

//1. ITERATING AN OBJECT  FOR IN LOOP
let obj1 = {
  name: "Harry",
  language: "JavaScript",
  hobbies: "Android app development",
};
console.log(obj1);
//1.1 Iterating an object using Traditional for loop:
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
}

//1.2 Iterating an object using for-in loop:
for (let key in obj) {
  console.log(obj[key]);
}

//**********For of loop***********

console.log("*****************For of loop starts here**************");
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for (let name of people) {
  console.log(name);
}

for (let name of myString) {
  console.log(name);
}

//FOR EACH LOOP

let arr = [2, 5, 6, 4, 2, 3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}

arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});
