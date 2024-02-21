/* 
 Array.prototype.myForEach = function(callback) {
      for (let i = 0; i < this.length; i++) {
        callback(this[i]);
      }
    };
    
    function callback(element) {
      console.log(element); //insert logic
    }
    
    var array = [2, 4, 6, 8, 10];
    array.myForEach(callback);
  */
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
function callback(element) {
  console.log(element); //insert logic
}

myForEach([1, 2, 3, 4, 5], callback);



function ForEach(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

var array = [2, 4, 6, 8, 10];
ForEach(array);



Array.prototype.myForEach = function (callback, thiscontext) {
  if (typeof callback !== "function") {
    throw `not a function`; 
  }
  let i = 0;
  while (i < this.length) {
    if (this.hasOwnProperty) {
      callback.call(thiscontext, this[i], i, this);
    }
    i++;
  }
};

function callback(element) {
  console.log(element); //insert logic
}

var array = [2, 4, 6, 8, 10];
array.myForEach(callback);





// Polyfill for forEach
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('this is null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const array = Object(this);
    const length = array.length >>> 0;

    for (let i = 0; i < length; i++) {
      if (i in array) {
        callback.call(thisArg, array[i], i, array);
      }
    }
  };
}

// Example usage:
const numbers = [1, 2, 3];

numbers.myForEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});
