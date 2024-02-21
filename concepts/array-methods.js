/*let num = [42, 56, 78, 43, 57, 90];

num.filter( n => n%2===0)
   .map( n => n*3 )
   .reduce((a,b) => a+b);

   // .forEach( n => {
   //    console.log(n);
   // });
*/

const items = [
    {name: 'bike',  price : 100000 },
    {name: 'phone',  price : 10000},
    {name: 'book',  price : 200},
    {name: 'pen',  price : 20},
    {name: 'pencil',  price : 10}
 ]
 
 const itemNames = items.map((item) =>{
    return item.name
 })
 console.log(itemNames);
 
 /*
 const numbers = [1, 5, 6, 9]
 
 const filtered = numbers.filter(function(value)
 {
    return value >= 8;
 });
 console.log(filtered); 
 */
 /*
 const filtered = items.filter((item) =>{
    return item.price >=100;
 })
 console.log(filtered);
 */
 
 /*
 const foundItem = items.find((item) => {
    return item.name=== 'pencil'
 })
 console.log(foundItem);
 
 items.forEach((item) => {
    console.log(item.name);
 })
 
 const hasInExperienced = items.some((item)=>{
    return item.price <=10
 })
 console.log(hasInExperienced);
 
 
 const includesTwo = items.includes(7)
 console.log(includesTwo);
 */