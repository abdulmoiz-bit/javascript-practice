// function declaration


function calcAge1(birthYear){
    const age= 2022- birthYear;
     return age;
  }
  age1 = calcAge1(1999);
  console.log(age1);
  
  var birthYear1= 1999;
  console.log(2021-birthYear1); 
  
  
  function calAge2(birthYear){
      const age= 2022-birthYear;
      return age;
  }
   
  age2= calAge2(1999);
  console.log(age2);
  
  var birthYear2=1999;
  console.log(2022-birthYear2);
  
  function calAge3(birthYear){
      const age= 2022-birthYear;
      return age;
  }
  
  age3= calAge3(1995);
  console.log(age3);
  
  let birthYear3= 1991;
  console.log(2022-birthYear3);
  
  
  //function expression
  const calcAge2 = function(birthYear){
  return 2021-birthYear; 
  }
  const age2= calcAge2(1999);
  console.log(age2);
  
  
  
  //Arrow Function
  
  const calcAge3 = birthYear =>
      2022-birthYear
  const age3 = calcAge3(1999);
  console.log(age3);
  
  const calAge2= birthYear =>
      age3=2022-birthYear
  
  
  const age4= calAge2(1998);
  console.log(age4);
  
  
  const yearsUntilRetirement = (birthYear, firstName) =>{
        const age = 2021 - birthYear;
        const retirement = 60- age;   
  
        return `${firstName} retires in ${retirement} years`;
  }
       
  
  console.log(yearsUntilRetirement(1991, 'moiz'));
  console.log(yearsUntilRetirement(1990, 'faizan')); 
  
  const yearsUntilRetirement1= (birthYear, firstName) =>{
       const age = 2022-birthYear;
       const retirement= 65-age;
        return `${firstName} retires in ${retirement}`;
  }
  
  console.log(yearsUntilRetirement1(1995, 'aqib'));
  console.log(yearsUntilRetirement1(1991, 'hasnain'));
  
  
  //Factory Function


function creatCircle(){
    return {
       radius,
       draw(){
           console.log('draw');
 
       }
    }
 };
 
 
 
 //Constructor Function
 
 
 function Circle(radius ){
    this.radius = radius;   
    this.draw = function(){
       console.log('draw');
    }
 
 }
   const circle= new Circle(1);                                                                                                                                                    
 
 