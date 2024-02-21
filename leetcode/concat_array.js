function concat_array(nums) {
    var ans, n;
    n = nums.length;
    ans = [0] * (2 * n);
  
    for (var i = 0, _pj_a = n; i < _pj_a; i += 1) {
      ans[i] = ans[i + n] = nums[i];
    }
  
    return ans;
  }
  
  nums = [1, 2, 3, 4];
  result = concat_array(nums);
  console.log(result);
  
  //ES5
  /*
  var nums, result;
  function concat_array(nums) {
      var ans, n;
      n = nums.length;
      ans = ([0] * (2 * n));
      for (var i = 0, _pj_a = n; (i < _pj_a); i += 1) {
          ans[i] = ans[(i + n)] = nums[i];
      }
      return ans;
  }
  nums = [1, 2, 3, 4];
  result = concat_array(nums);
  console.log(result);
  */

  var getConcatenation = function(nums) {
	//spread the nums array twice and return it
    //return [...nums,...nums]
    return nums.concat(nums)
};
console.log(getConcatenation([1,2,3]))