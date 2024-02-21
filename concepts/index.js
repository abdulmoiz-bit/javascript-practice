/*
function calcAge(birthYear, firstName){
       const age= 2020-birthYear;
       console.log(`${firstName} is ${age} years old`);
       return age;
   }

   calcAge(1999, 'Moiz')


   const calcAverage = (a,b,c) => (a+b+c) / 3;
   console.log(calcAverage(3, 4, 5));

   // Test 1
    var scoreDolphins = calcAverage(44,23,71);
    var scoreKoalas = calcAverage(65,54,49);
    console.log(scoreDolphins, scoreKoalas);
   
    const checkWinner = function (avgDolphins, avgKoalas)
    {
      if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
      }
      else if (avgKoalas>= 2 *avgDolphins){
         console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
      }
      else{
        console.log (`No one wins`);
      }
    }

      checkWinner(scoreDolphins,scoreKoalas);
      scoreDolphins= calcAverage(23, 34, 27);
      scoreKoalas = calcAverage(65,54,49);
      console.log(scoreDolphins, scoreKoalas);
      checkWinner(scoreDolphins, scoreKoalas);

      const calcAge = function(birthYear){
         return 2021-birthYear;

      }
          const years=[1990,1999,2000,2001];
          const age1 =calcAge(years[0]);
          const age2 =calcAge(years[2]);
          const age3 =calcAge(years[3]);
          console.log(age1, age2, age3);
       

 //Add Elements

function logger(){
   console.log('My name moiz');
 };
 logger();

 const now=2021;
 const moizage=now-1999;
 const hasnainage= now-1998;
 console.log(now-1998 > now-1999);





// DEFAULT PARAMETER

function multiply(a, b) {
    return a * b
  }
  
  multiply(5, 2)  // 10
  multiply(5)     // NaN !



//HANDLING CLICK EVENTS

document.querySelector('.check').addEventListener
('click', function(){
  const guess=Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess){
     document.querySelector('.message').textContent= 'No Number'; 
  }
});


/* 20 String Methods */

var stringOne = "freeCodeCamp is the best place to learn"
var stringTwo = "frontend and backend development"

// charAt()
console.log(stringOne.charAt(1))

// charCodeAt()
console.log(stringOne.charCodeAt(1))

// concat()
console.log(stringOne.concat(stringTwo))

// endsWith()
console.log(stringOne.endsWith("to"))

// fromCharCode()
console.log(String.fromCharCode(114))


// includes()
console.log(stringTwo.includes("end"))


// indexOf()
console.log(stringTwo.indexOf("end"))

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end"))

// match()
console.log(stringTwo.match(/end/g))

// repeat()
console.log(stringOne.repeat(3))


// replace()
console.log(stringTwo.replace(/end/g, "END"))

// search()
console.log(stringTwo.search("end"))

// slice()
console.log(stringTwo.slice(2, 4))

// split()
console.log(stringOne.split(" "))

// startsWith()
console.log(stringOne.startsWith("free"))

// substr()
console.log(stringTwo.substr(2, 4))

// substring()
console.log(stringTwo.substring(2, 4))

// toLowerCase()
console.log(stringOne.toLowerCase())

// toUpperCase()
console.log(stringOne.toUpperCase())

// trim()
var stringThree = "     Subscribe now!      ";
console.log(stringThree.trim())


let main = document.getElementById('main');
console.log(main);
let nav = document.getElementById('nav');
console.log(nav);

let containers = document.getElementsByClassName('container');
console.log(containers);

// let sel = document.querySelector('#nav>li');
// console.log("Selector returns ", sel)

let sel = document.querySelectorAll('#nav>li');
console.log("Selector returns ", sel)

