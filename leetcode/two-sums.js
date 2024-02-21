/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    var complement_map = {};

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var complement = target - num;

        if (complement in complement_map) {
            return [complement_map[complement], i];
        }

        complement_map[num] = i;
    }

    return [];
}

var nums = [2, 7, 11, 15];
var target = 13;
var result = twoSum(nums, target);
console.log(result);


/*
function twoSum(nums, target) {
 const map = new Map();
 for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
 }
 return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
*/
