const Array = require('./array');

function main() {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // Remove last items from array

  arr.pop();
  arr.pop();
  arr.pop();

  if (arr.length) {
    for (let i = 0; i = arr.length; i++) {
      arr.remove(0);
      console.log(arr.length);
    }
  }

  arr.push('tauhida');
  //trying to console.log 'tauhida' results in NaN.
  // console.log(arr.get(0));

  console.log(arr);
}


function urlIFY(string) {
  let array = string.split(' ');
  let answer = array.join('%20');
  return answer;
}

// console.log(urlIFY('www.thinkful.com /tauh ida parv een'));
// the big O of the above algorithm is O(n) linear.


function filtering(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 5) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

// console.log(filtering([-1, 1, 1, 2, 2, 3, 4, 5, 6, 7]));
// the big O of the above algorithm is O(n^2) polynomial because we loop through 
// the array based on the length, and then again when we use the splice method
//we iterate over the array every time it is called to copy the elements into each previous index.

//alternate solution
function filteringTwo(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// console.log(filteringTwo([-1, 1, 1, 2, 2, 3, 4, 5, 6, 7]));
//this solution would be big O(n) linear based on the size of the array. It iterates over 
// the array once in a for loop. 


function maxSum(array) {
  let max = array[0];
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum += array[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// console.log(maxSum([4, 6, -3, 5, -2, 1]));
// the big O of the above algorithm is O(n) linear.

function mergeArrays(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  arr1.sort((a, b) => a - b);
  return arr1;
}

// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
// the big O of the above algorithm is O(n^2) polynomial.


function removeChar(string, chars) {
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string[j] === chars[i]) {
        string = string.replace(chars[i], '');
      }
    }
  }
  return string;
}

// console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
// the big O of the above algorithm is O(n^2) polynomial.

function products(arr) {
  let result = 1;
  let total = [];
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i]
  }
  for (let j = 0; j < arr.length; j++) {
    total.push(result / arr[j])
  }
  return total;
}

// console.log(products([1, 3, 9, 4]));
// the big O of the above algorithm is 0(n^2) polynomial.

function twoD(arr) {
  let newarr = [];
  for (let x = 0; x < arr.length; x++) {
    newarr.push([...arr[x]])
  }
  // x = row
  for (let x = 0; x < arr.length; x++) {
    // y = column
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] === 0) {
        for (let z = 0; z < arr[x].length; z++) {
          newarr[x][z] = 0;
        }
        for (let m = 0; m < arr.length; m++) {
          newarr[m][y] = 0;
        }
      }
    }
  }

  return newarr;
}

// console.log(twoD(
//   [[1,0,1,1,0],
//   [0,1,1,1,0],
//   [1,1,1,1,1],
//   [1,0,1,1,1],
//   [1,1,1,1,1]]
// ));
// the big O of the above algorithm is o(n^4) polynomial.

function rotation(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    let newstr = str2[i] + str2.slice(i + 1) + str2.slice(0, i);
    if (newstr === str1) {
      return true;
    }
  }
  return false;
}

// console.log(rotation('amazon', 'azonam'));
// the big O of the above algorithm is 0(n) linear.
