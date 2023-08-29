
let age1=18;
let isoldenough= age1>=18;

if(isoldenough){
console.log('can drive');

}             
 else{
       console.log('cant drive');
     }

       console.log(23);


//IF ELSE STATEMENT 
var age =18;

if(age>=18){
    console.log("You are an adult")
   
}else{

    console.log("You are a kid")

};


let drink2= age1>=18 ? 'wine' : 'water';
console.log(drink2);

  var drink3;
 if (age1>=18){
   drink3 = 'wine';
 } else{
  drink3 = 'water';
 }
 console.log(drink3);
 console.log(`i like to drink ${age1>=18 ? 'wine' : 'water'}`);

const number = prompt("Enter a number:");


// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}



//switch statement


const day = 'sunday';
switch (day){
   case 'monday':
 console.log('plan course structure');
 console.log('go to meeting');
 break;
   case  'tuesday':
   console.log('go to uni');
   break;
   case 'wednesday':
   case 'thursday':
     console.log('go to office');
     break;
   case 'friday':
     console.log('go to masjid');
     break;
   case 'saturday':
   case 'sunday':
     console.log('go to party');
     break;
     default:
       console.log('not a valid day');
}
if (day==='monday'){
}
else if(day === 'tuesday'){
}


//TERNORY OPERATOR
 
console.log((age>=18)? "You are an adult" : "You are a kid");


var stop;
age >= 18 ?(
   console.log("Ok you can go"),
   stop=false
   
):
(
  console.log("You cant go"),
  stop=true
)

var firstCheck=false,
    secondCheck=false,
    access= firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Aceess granted";


