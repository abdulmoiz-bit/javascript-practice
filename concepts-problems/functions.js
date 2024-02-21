// add array values
// add multiple array values into one array and in one value
// collect odd or even values from an array or multiple arrays
// manipulate array values

function concet(arr1, arr2, arr3) {
    return arr1.concat(arr2).concat(arr3)
}
console.log(concet([1, 2, 3], [1, 2, 3], [1, 2, 3]))

const user = [1,2,3,4]
const user1 = [5,6,7,8]
const user2 = [9,1]
console.log(user.concat(user1).concat(user2))

let nums = [5,6,7,8]
nums.forEach(item => console.log(item*2))

let result = nums.map(item => item+1)
console.log(result)