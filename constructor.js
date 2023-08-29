// CONSTRUCTOR FUNCTION
// CLASS CONSTRUCTORS
/*
class Rectanglar{
    constructor(height,width){
        this.name= 'Rectanglar';
        this.height= height;
        this.width= width; 
    }
    sayName(){
        console.log('Hi, I am a', this.name + '.');
    }
}
*/
/*
class User{
constructor(email, name, address){
  this.email= email;
  this.name=name;
  this.address=address;

}
}

var userOne= new User('moiz@gmail.com', 'moiz', 145);
var userTwo= new User('aqib@gmail.com', 'aqib', 148);

console.log(userOne);
console.log(userTwo);

// the 'new' keyword
// create a new empty object {}
// sets the value of 'this' to be the new empty object
// calls the constructor method 


// CLASS METHODS
/*
class User{
constructor(email, name){
  this.email= email;
  this.name=name;

}

login(){
  console.log(this.email, this.name,  'just logged in')
}
logout(){

   console.log(this.email, this.name, 'just loged out')
}
}

var userOne= new User('moiz@gmail.com', 'moiz');
var userTwo= new User('aqib@gmail.com', 'aqib');

userOne.login();
userTwo.logout();



class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);  
/*
document.getElementById("demo").innerHTML =
myCar.name + " car is " + myCar.age() + " years old.";
*/
/*
document.getElementById("root").innerHTML =
myCar.name + " car is " + myCar.age() + " years old.";
*/
//console.log(myCar.name + " car is " + myCar.age() + "years old")

class Flight{
constructor(airlines, flightNumber){
  this.airlines= airlines;
  this.flightNumber= flightNumber; 

  this.display = function(){
    console.log(this.airlines);
    console.log(this.flightNumber);
  };
  
}}

let flight1= new Flight("American Airlines")
let flight2= new Flight("PK 123")

console.log(flight1);
console.log(flight2);


function Alien(name, tech) {
  this.name = name;
  this.tech = tech;
  this.work = function() {
    console.log('solving bugs')
  }
}

let alien = new Alien('moiz', 'JS');
console.log(alien)
alien.work()











