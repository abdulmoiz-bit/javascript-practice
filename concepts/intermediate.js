/*
prompt("Whats your name ?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("your love score is " + loveScore);
*/

// !== is not equal to
// === checking the data types also

function isLeap() {
  let year = prompt("Enter year");
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      document.getElementById("demo").innerHTML = "leap year" + year;
      /*
      if (year % 400 === 0) {
        document.getElementById("demo").innerHTML= "leap year" + year;
      } else {
        document.getElementById("demo").innerHTML= "Not a leap year" + year;
      }*/
    } else {
      document.getElementById("demo").innerHTML = "Not a leap year" + year;
    }
  } else {
    document.getElementById("demo").innerHTML = "Not a leap year" + year;
  }
}

var output = [];
var count = 1;

function fizzBuzz() {
  output.push(count);
  count++;
  console.log(output);
}

var output = [];
var count = 1;

function fizzBuzz() {

    while(count <= 100){
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(count);
  }
  count++;
    }
  console.log(output);
}

names = ["moiz", "hasnain", "aqib", "hala"]

function whoPaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to pay";

}
whoPaying();


var output = [];


function fibonaaciGenerator(n){
    
      if(n === 1){
        output = [0];
      }
      else if (n === 2){
        output = [0, 1];
      }else {
        output = [0, 1]
         for(i = 2; i < n; i++){
        output.push(output[output.length - 2] + output[output.length - 1]);
         }
      }
      return output;
}  

output = fibonaaciGenerator();
console.log(output);


// drumkit 

