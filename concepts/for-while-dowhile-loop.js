
//A while loop evaluates the condition inside the parenthesis ().
//If the condition evaluates to true, the code inside the while loop is executed.
//The condition is evaluated again.
//This process continues until the condition is false.
//When the condition evaluates to false, the loop stops.
let n = 5;
let i = 1;
while (i <= n) {
    console.log(i)
    i++
}

// dowhile loop
//The body of the loop is executed at first. Then the condition is evaluated.
//If the condition evaluates to true, the body of the loop inside the do statement is executed again.
//The condition is evaluated once again.
//If the condition evaluates to true, the body of the loop inside the do statement is executed again.
//This process continues until the condition evaluates to false. Then the loop stops

let ii = 0;
let nn =5;
do{
 ii++
console.log(i)
}
while(ii<=nn)


//forloops
//The initialExpression initializes and/or declares variables and executes only once.
//The condition is evaluated.
//If the condition is false, the for loop is terminated.
//If the condition is true, the block of code inside of the for loop is executed.
//The updateExpression updates the value of initialExpression when the condition is true.
//The condition is evaluated again. This process continues until the condition is false.

function addUpToFirst(n) {
    var total = 0;
    for (let i = 0; i <= n; i++) {
        total = total + i;
    }
    return total;
}
console.log(addUpToFirst(3))
/*
0 -- 1
1 -- 2
3 -- 3
6 -- 4
*/

function multiplyUpToFirst(n) {
        var total = 1;
        for (let i = 1; i <= n; i++) {
            total = total * i;
        }
        return total;
    }
console.log(multiplyUpToFirst(5))